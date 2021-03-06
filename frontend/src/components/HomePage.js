import React, { Component } from 'react';
import GuessableList from './GuessableList'
import PredictionList from './PredictionList'
import './HomePage.css';
import DeleteContest from './DeleteContest';
import AddPlayerForm from './AddPlayerForm'
import AddNewPlayerButton from './AddNewPlayerButton'


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
       }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
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

           <div>
            { this.props.selectedContest ? 
            <button className={` ${this.state.isToggleOn ? 'click-state': null } form-submit `}   
            onClick={this.handleClick}>
            Add Player to {this.props.selectedContest.title}
            </button> : null }
          </div>  

          { this.state.isToggleOn ? 
          <AddPlayerForm 
          selectedContest={this.props.selectedContest} 
          onPlayerSubmit={this.props.onPlayerSubmit} 
          createdPlayer={this.props.createdPlayer} 
          onPredictionSubmit={this.props.onPredictionSubmit} /> : null }

          <div class="button-wrapper-button">
            <AddNewPlayerButton createdPlayer={this.props.createdPlayer} />
            <DeleteContest selectedContest={this.props.selectedContest} onContestDelete={this.props.onContestDelete} />
          </div>
        </>   
    )
  }

  
}


export default HomePage;
