import React, { Component } from 'react';
import GuessableList from './GuessableList'
import PredictionList from './PredictionList'
import './ContestList.css';
import AddGuessableForm from './AddGuessableForm'

class ContestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedContest: null,
      selectedGuessable: null
    }
    this.handleSelectContest = this.handleSelectContest.bind(this)
    this.handleSelectGuessable = this.handleSelectGuessable.bind(this)
    // this.displayContests = this.displayContests.bind(this);
    this.handleGuessableSubmit = this.handleGuessableSubmit.bind(this);
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

  handleGuessableSubmit(submittedGuessable){

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
    .then(guessable =>{
          this.setState({
            selectedGuessable: guessable
          })
          });
  }


  render() {

    return (
      <>
        <h1 className="title-text">Contests</h1>
        <ul className="contest-list">
    { this.props.contests.map(contest => {
      return <li value={contest.id} key={contest.id} onClick={this.handleSelectContest}>{contest.title}</li>

    })}
    </ul>
        <a href="http://localhost:3000/add-contest" className="clickable-button">Add New Contest</a>
        <GuessableList selectedContest={this.state.selectedContest} onGuessableClick={this.handleSelectGuessable} />
        <PredictionList selectedGuessable={this.state.selectedGuessable} />
       { this.state.selectedContest ? <AddGuessableForm selectedContest={this.state.selectedContest}
    onGuessableSubmit={this.handleGuessableSubmit} /> : null}
      </>
    )



  }
}


export default ContestList;
