import React, { Component } from 'react'

class AddGuessable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessable: ""
    };
    this.handleGuessableChange = this.handleGuessableChange.bind(this)
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

  handleGuessableChange(event) {
    this.setState({ guessable: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add a guessable to this ca</h1>
        <input className="form-text" value={this.state.guessable} onChange={this.handleGuessableChange} />
        <div>
          <input className="form-submit" type="submit" value="Submit Category" />
        </div>
      </form>
    )
  }

}
export default AddGuessable
