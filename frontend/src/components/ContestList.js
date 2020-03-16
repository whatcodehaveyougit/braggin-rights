import React, { Component } from 'react';
import GuessableList from './GuessableList'
import PredictionList from './PredictionList'
import './ContestList.css';
import DeleteContest from './DeleteContest';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GameSetup from './GameSetup.js'


class ContestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedContest: null,
      selectedGuessable: null,
      createdPlayer: null
    }
    this.handleSelectContest = this.handleSelectContest.bind(this)
    this.handleSelectGuessable = this.handleSelectGuessable.bind(this)
    this.handleGuessableSubmit = this.handleGuessableSubmit.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handlePredictionSubmit = this.handlePredictionSubmit.bind(this);
    this.newPlayer = this.newPlayer.bind(this)
  }

  handleSelectContest(event) {
    this.setState({
      selectedGuessable: null
    })
    const selectedContest = this.props.contests.find(contest => {
      return contest.id == event.target.value
    })
    this.props.onContestSelect(selectedContest)
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

    return (
 
      <Router>
        <React.Fragment>
          <Switch>
          {/* <Route exact path="/" component={ContestList} />

        <h1 className="title-text">Contests</h1>
        <ul className="contest-list">
          {this.props.contests.map(contest => {
            return <li value={contest.id} key={contest.id} onClick={this.handleSelectContest}>{contest.title}</li>
          })}
        </ul>
        <div className="section-wrapper">
        <a href="http://localhost:3000/add-contest" className="form-submit">Add New Contest</a>
        <DeleteContest selectedContest={this.state.selectedContest} onContestDelete={this.props.onContestDelete} />
        </div>
        <GuessableList selectedContest={this.state.selectedContest} onGuessableClick={this.handleSelectGuessable} />
        
        <div>
         {this.state.selectedGuessable ? <h2> Predictions for  {this.state.selectedGuessable.title}</h2> : null }
          <PredictionList selectedGuessable={this.state.selectedGuessable} />
        </div> */}

        <Route path="/game-setup" component={GameSetup} 
        render={(props) => <GameSetup 
          selectedContest={this.state.selectedContest}
          onGuessableSubmit={this.handleGuessableSubmit}
          onPlayerSubmit={this.handlePlayerSubmit} newPlayer={this.newPlayer}
          selectedContest={this.state.selectedContest}
          createdPlayer={this.state.createdPlayer} onPredictionSubmit={this.handlePredictionSubmit} 
        />}
        />
         </Switch>
        </React.Fragment>
      </Router>
    )


  }
}


export default ContestList;
