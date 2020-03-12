import React, { Component } from 'react'
import './AddPredictionForm.css'


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: "",
          guessableToUpdateId: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
        this.updateGuessableState = this.updateGuessableState.bind(this)
    }

    handlePredictionChange(event) {
        this.setState({ prediction: event.target.value})
      }

    handleSubmit(event) {
        event.preventDefault();
        const prediction = this.state.prediction;
        const guessableToUpdateId = this.state.guessableToUpdateId;

        if (!prediction || !guessableToUpdateId) {
          return
        }
        this.props.onPredictionSubmit({
          title: prediction
        }, {
          guessable: guessableToUpdateId
        }

        )
        this.setState({
          prediction: "",
          guessableToUpdateId: ""
        })
      }

      updateGuessableState(guessableId){
        this.setState({guessableToUpdateId: guessableId})
      }

    render(){

        return(
            <>
            <section>
                <h2>Now Add {this.props.createdPlayer.name}'s Predictions for {this.props.selectedContest.title}</h2>
                { this.props.selectedContest.guessables.map(guessable => {
                  return <form onSubmit={this.handleSubmit}>
                      <label>
                      { guessable.title }
                      </label><br/>
                          <input className="form-text" onChange={this.handlePredictionChange}></input>
                          <input className="hide-input"></input>
                      <input type="submit" value="Submit Prediction" onClick={() => this.updateGuessableState(guessable.id)} />
                  </form>
                }
              )}
              </section>
              </>
            )
}
}

    export default AddPredictionForm
