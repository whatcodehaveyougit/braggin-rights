import React, { Component } from 'react'
import './AddPredictionForm.css'


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
    }

    handlePredictionChange(event) {
        this.setState({ name: event.target.value })
      }

    handleSubmit(event) {
        event.preventDefault();

        console.log(event.target.value)
        // event.preventDefault();
        // const prediction = this.state.prediction;
        // const guessablePredicted = event.target.value;
    
        // if (!prediction) {
        //   return
        // }
        // this.props.onPredictionSubmit({
        //   title: prediction
        // }, {
        //   guessable: guessablePredicted
        // }
        
        // )
        // this.setState({
        //   prediction: ""
        // })
      }

    render(){
        
        return(
            <> 
                <section>
                    <h2>Now Add {this.props.createdPlayer.name}'s Predictions for {this.props.selectedContest.title}</h2>
                    { this.props.selectedContest.guessables.map (guessable => {
                    return  <form onSubmit={this.handleSubmit}>
                                <label >
                                { guessable.title }
                                </label><br/>
                                    <input className="form-text" onChange={this.handlePredictionChange}></input>
                                    <input className="hide-input" value={ guessable.id }></input>
                                <input type="submit" value="Submit Prediction" />
                            </form>
                 
                 
                })}
                 </section> 
               </>
      )}
    }
    export default AddPredictionForm
