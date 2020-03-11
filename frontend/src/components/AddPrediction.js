import React, { Component } from 'react'

class AddPrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
          predictionTitle: ""
        };
      this.handlePredictionTitleChange = this.handlePredictionTitleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlePredictionTitleChange(event) {
      this.setState({ predictionTitle: event.target.value })
    }

    handleSubmit(event){
      event.preventDefault();

      const predictionTitle = this.state.predictionTitle;

        if (!predictionTitle) {
          return
        }
        this.props.onPredictionSubmit({
          predictionTitle: predictionTitle
        })
        this.setState({
          predictionTitle: ""
        })

    }

    render(){
      if(this.props.createdGuessable != null && this.props.createdPlayer != null){
      return(

        <form onSubmit={this.handleSubmit}>
          <h3>Add Prediction</h3>
              <p>{this.props.createdPlayer.name} prediction for {this.props.createdGuessable.title}</p>
              <input value={this.state.predictionTitle} onChange={this.handlePredictionTitleChange} />
            <div>
              <input type="submit" value="Submit Prediction" />
            </div>
        </form>
    )}
    return null
  }


}

export default AddPrediction;
