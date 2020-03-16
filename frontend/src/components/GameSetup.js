import React, { Component } from 'react'

class GameSetup extends Component {
    constructor(props) {
        this.state = {

        }
    }

render(){
    return (

        {this.state.selectedContest ? <AddGuessableForm selectedContest={this.state.selectedContest}
          onGuessableSubmit={this.handleGuessableSubmit} /> : null}

      { this.state.selectedContest && this.state.createdPlayer === null ? <AddPlayerForm selectedContest={this.state.selectedContest}
      onPlayerSubmit={this.handlePlayerSubmit} /> : null}

      { this.state.createdPlayer ? <AddPredictionForm selectedContest={this.state.selectedContest}
      createdPlayer={this.state.createdPlayer} onPredictionSubmit={this.handlePredictionSubmit} /> : null }
      
      { this.state.selectedContest && this.state.createdPlayer ? <button onClick={this.newPlayer}>Add Another Player</button> : null }
    )
}



}