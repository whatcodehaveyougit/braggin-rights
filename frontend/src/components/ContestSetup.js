import React, { Component } from 'react'
import AddGuessableForm from './AddGuessableForm';
import AddPlayerForm from './AddPlayerForm';
import AddPredictionForm from './AddPredictionForm.js'

class ContestSetup extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        }
    }


render(){
    return (
        <>
        {this.props.selectedContest ? <AddGuessableForm selectedContest={this.props.selectedContest}
          onGuessableSubmit={this.props.onGuessableSubmit} /> : null}
          
        { this.props.selectedContest ? <AddPlayerForm selectedContest={this.props.selectedContest}
        onPlayerSubmit={this.props.onPlayerSubmit} /> : null} 

        { this.props.createdPlayer ? <AddPredictionForm selectedContest={this.props.selectedContest}
        createdPlayer={this.props.createdPlayer} onPredictionSubmit={this.props.onPredictionSubmit} /> : null }
      
        { this.props.selectedContest && this.props.createdPlayer ? <button onClick={this.props.newPlayer}>Add Another Player</button> : null }
    </>
    )
}



} export default ContestSetup