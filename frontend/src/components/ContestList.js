import React, {Component} from 'react';
import GuessableList from './GuessableList'
import PredictionList from './PredictionList'
import './ContestList.css';

class ContestList extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedContest: null,
      selectedGuessable: null
    }
    this.handleSelectContest = this.handleSelectContest.bind(this)
    this.handleSelectGuessable = this.handleSelectGuessable.bind(this)
  }

  handleSelectContest(event){
    this.setState({
      selectedGuessable: null
    })
    const selectedContest = this.props.contests.find(contest => {
      return contest.id == event.target.value
    })
    this.setState({
      selectedContest: selectedContest
    })
  }

  handleSelectGuessable(id){
    const selectedGuessable = this.state.selectedContest.guessables.find(guessable => {
      return guessable.id === id
    })
    const correctId = selectedGuessable.id
    fetch(`http://localhost:8080/guessables/${correctId}`)
      .then(res => res.json())
      .then(fetchedGuessable => this.setState({selectedGuessable: fetchedGuessable}))
      .catch(err => console.error);
    }

    render(){
      return(
        <>
        <ul className="contest-list">
        {this.props.contests.map ( contest => {
          return <li value={contest.id} key={contest.id} onClick={this.handleSelectContest}>{contest.title}</li>
        })}
        </ul>
        <GuessableList selectedContest={this.state.selectedContest} onGuessableClick={this.handleSelectGuessable}/>
        <PredictionList selectedGuessable={this.state.selectedGuessable} />
        </>
      )
    }
  }

  export default ContestList;
