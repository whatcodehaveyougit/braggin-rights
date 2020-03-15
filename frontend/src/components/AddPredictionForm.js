import React, { Component } from 'react'
import './AddPredictionForm.css'


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: "",
          guessableToUpdateId: null,
          test: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
        this.updateGuessableState = this.updateGuessableState.bind(this)
        this.handlePlayerChange = this.handlePlayerChange.bind(this)
        }

    updateGuessableState(guessableId){
        this.setState({guessableToUpdateId: guessableId})
       
    }

    handleSubmit(event) {
        event.target.classList.add('click-state');
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
        })
        this.setState({
          prediction: "",
          guessableToUpdateId: ""
        })
      }

      handlePredictionChange(event) {
        this.setState({ prediction: event.target.value})
      }
      
      handlePlayerChange(event) {
        this.setState({ test: event.target.value})
      }

    render(){
        return(
            <>
            <section>
                <h2>Now Add {this.props.createdPlayer.name}'s Predictions for {this.props.selectedContest.title}</h2>
                { this.props.selectedContest.guessables.map(guessable => {
                  return <form onSubmit={this.handleSubmit} key={guessable.title} >
                      <label> { guessable.title } </label> <br/>
                          <input className="form-text" onChange={this.handlePredictionChange} />

{/* For some reason this is not working - why? */}
                          <input value={this.props.createdPlayer.name} onChange={this.handlePlayerChange} className="hide-input" />

                      <input type="submit" className="form-submit prediction" value="Submit Prediction" onClick={() => this.updateGuessableState(guessable.id)} />
                  </form>
                }
              )}
              </section>
              </>
            )
}
}

    export default AddPredictionForm
