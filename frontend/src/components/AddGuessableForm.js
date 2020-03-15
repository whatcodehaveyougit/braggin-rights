import React, { Component } from 'react'

class AddGuessableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessable: ""
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
          <h1 className="title-text">Add guessable to {this.props.selectedContest.title}</h1>
          <h2>What would you like to predict the outcome of in {this.props.selectedContest.title}?</h2>
          <input className="form-text" name="guessable" value={this.state.guessable} onChange={this.handleChange} />
          <div>
            <input className="form-submit" type="submit" value="Submit" />
          </div>
        </form>
      </>
    )
  }


}

export default AddGuessableForm
