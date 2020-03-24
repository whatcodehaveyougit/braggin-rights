import React, { Component } from 'react'
import AddedGuessablesList from './AddedGuessablesList'
import './AddGuessableForm.css'

class AddGuessableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessable: "",
      guessablesAdded: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 

  handleSubmit(event) {
    event.preventDefault();
    const guessableTitle = this.state.guessable;

    if (!guessableTitle) {
      return
    }
    this.props.onGuessableSubmit({
      title: guessableTitle
    }, () => {
      // this.setState({
      //   guessablesAdded: true
console.log("aere")
      // })
    })
    this.setState({
      guessable: ""
    })
   
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1 className="title-text">Add guessable to {this.props.createdContest.title}</h1>
          <h2>What would you like to predict the outcome of in {this.props.createdContest.title}?</h2>
          <input className="form-text" name="guessable" value={this.state.guessable} onChange={this.handleChange} />
          <div>
            <input className="form-submit" type="submit" value="Submit" />
          </div>
        </form>
        <h2>Prediction Items</h2>
       { this.state.guessablesAdded ? <AddedGuessablesList guessablesAdded={ this.state.guessablesAdded } createdContest={this.props.createdContest} /> : null }
       <a href="http://localhost:3000/"><button type="submit" className="form-submit home-button">Back to Home</button></a>
      </>
    )
  }


}

export default AddGuessableForm
