import React, { Component } from 'react';
import GuessableList from './GuessableList'
import PredictionList from './PredictionList'
import './HomePage.css';
import DeleteContest from './DeleteContest';

class ContestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
        <>
          <h1 className="contests-title-text">Contests</h1>
          <ul className="contest-list">
            {this.props.contests.map(contest => {
              return <li value={contest.id} key={contest.id} onClick={this.props.onContestSelect}>{contest.title}</li>
            })}
          </ul>

          <GuessableList selectedContest={this.props.selectedContest} onGuessableClick={this.props.onGuessableClick} />
          <div>
          {this.props.selectedGuessable ? <h2> Predictions for  {this.props.selectedGuessable.title}</h2> : null }
            <PredictionList selectedGuessable={this.props.selectedGuessable} />
          </div> 
          <DeleteContest selectedContest={this.props.selectedContest} onContestDelete={this.props.onContestDelete} />
        </>
       
    )


  }
}


export default ContestList;
