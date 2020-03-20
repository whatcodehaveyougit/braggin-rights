import React, { Component } from 'react'
import HomePage from '../components/HomePage.js'
import NavBar from '../components/NavBar'
import {BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import ContestForm from '../components/ContestForm.js'
import GameSetup from '../components/GameSetup.js'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      contests:  [],
      selectedContest: null,
      selectedGuessable: null,
      createdPlayer: null,
      redirectToReferrer: false
    }
    this.handleContestSubmit = this.handleContestSubmit.bind(this);
    this.handlePredictionSubmit = this.handlePredictionSubmit.bind(this);
    this.handleDeleteContest = this.handleDeleteContest.bind(this);
    this.handleSelectContest = this.handleSelectContest.bind(this);
    this.handleSelectGuessable = this.handleSelectGuessable.bind(this);
    this.handleGuessableSubmit = this.handleGuessableSubmit.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.newPlayer = this.newPlayer.bind(this);
  }

  handleDeleteContest(deletedContestId) {
  console.log(deletedContestId)
  const url=`http://localhost:8080/contests/${deletedContestId}`
  fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        })
      }).then(() => {
            const newContestArray = this.state.contests.filter(contest => contest.id !== deletedContestId)
            this.setState({contests: newContestArray})
           })
     }


  componentDidMount(){
      const url = 'http://localhost:8080/contests'
      fetch(url)
      .then(res => res.json())
      .then(contests => this.setState({ contests: contests._embedded.contests }))
      .catch(err => console.error);
      // this.setState({contestAdded: false})
  }


  handleContestSubmit(submittedContest) {
    fetch('http://localhost:8080/contests', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: submittedContest.title
      })
    })
    .then(res => res.json())
    .then(contest =>{
          const updatedContests = [...this.state.contests, contest];
          this.setState({
            contests: updatedContests
          });
        })
     .then(this.setState({
          redirectToReferrer: true
        }))
  }

  handlePredictionSubmit(submittedPrediction){
    fetch('http://localhost:8080/predictions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        predictionTitle: submittedPrediction.predictionTitle,
        player: `http://localhost:8080/players/${this.state.createdPlayer.id}`,
        guessable: `http://localhost:8080/guessables/${this.state.createdGuessable.id}`
      })
    })
    .then(res => res.json())
    .then(prediction =>{
          console.log(prediction)
        });
  }

  handleSelectContest(event) {
    this.setState({
      selectedGuessable: null
    })
    const selectedContest = this.state.contests.find(contest => {
      return contest.id == event.target.value
    })
    this.setState({
      selectedContest: selectedContest
    })
  }

  handleSelectGuessable(id) {
    const selectedGuessable = this.state.selectedContest.guessables.find(guessable => {
      return guessable.id === id
    })
    const correctId = selectedGuessable.id
    fetch(`http://localhost:8080/guessables/${correctId}`)
      .then(res => res.json())
      .then(fetchedGuessable => this.setState({ selectedGuessable: fetchedGuessable }))
      .catch(err => console.error);
  }

  handleGuessableSubmit(submittedGuessable) {
    fetch('http://localhost:8080/guessables', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: submittedGuessable.title,
        contest: `http://localhost:8080/contests/${this.state.selectedContest.id}`,
        result: ""
      })
    })
      .then(res => res.json())
      .then(guessable => {
        this.setState({
          selectedGuessable: guessable
        })
      });
  }

  handlePlayerSubmit(submittedPlayer) {
    fetch('http://localhost:8080/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: submittedPlayer.name
      })
    })
    .then(res => res.json())
    .then(player => { this.setState({createdPlayer: player})})
  };

    handlePredictionSubmit(submittedPrediction, guessablePredicted){
      fetch('http://localhost:8080/predictions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          predictionTitle: submittedPrediction.title,
          player: `http://localhost:8080/players/${this.state.createdPlayer.id}`,
          guessable: `http://localhost:8080/guessables/${guessablePredicted.guessable}`
        })
      })
      .then(res => res.json())
      .then(AddPredictionForm =>{
        console.log(submittedPrediction)
      })
    };

    newPlayer(){
      this.setState({ createdPlayer: null })
    }

  render() {
    return(
      <Router>
        <React.Fragment>
        <NavBar/>
            <Route exact path="/">
              {this.state.redirectToReferrer ? <Redirect to="/" /> : null }
            </Route>


           <Route
              exact
              path="/"
              render={() => <HomePage contests={this.state.contests} onContestSelect={this.handleSelectContest} onContestDelete={this.handleDeleteContest}
              onGuessableSubmit={this.handleGuessableSubmit} onGuessableClick={this.handleSelectGuessable} selectedGuessable={this.state.selectedGuessable} selectedContest={this.state.selectedContest} />}
            />


            <Route
              path="/add-contest"
              render={() => <ContestForm onContestSubmit={this.handleContestSubmit}
              createdContest={this.state.createdContest} createdPlayer={this.state.createdPlayer} onPlayerSubmit={this.handlePlayerSubmit} onPredictionSubmit={this.handlePredictionSubmit} />}
            />


            <Route path="/setup" component={GameSetup} 
            render={(props) => <GameSetup 
              selectedContest={this.state.selectedContest}
              onGuessableSubmit={this.handleGuessableSubmit}
              onPlayerSubmit={this.handlePlayerSubmit} newPlayer={this.newPlayer}
              selectedContest={this.state.selectedContest}
              createdPlayer={this.state.createdPlayer} onPredictionSubmit={this.handlePredictionSubmit} 
            />}
            />

        </React.Fragment>
      </Router>

    )
  };
}
;
export default Dashboard;
