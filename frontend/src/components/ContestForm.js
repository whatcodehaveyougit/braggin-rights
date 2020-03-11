import React, { Component } from 'react'
import AddGuessable from './AddGuessable.js'

class ContestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;

    if (!title) {
      return
    }
    this.props.onContestSubmit({
      title: title
    })
    this.setState({
      title: ""
    })
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrap">
            <h1>Enter Name Of Contest</h1>
            <input className="form-text" type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <input className="form-submit" type="submit" value="Submit Contest" />


        </form>
        <AddGuessable createdContest={this.props.createdContest} onGuessableSubmit={this.props.onGuessableSubmit} />
      </>
    )
  }
}


export default ContestForm
