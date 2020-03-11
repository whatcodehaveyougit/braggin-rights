import React, { Component } from 'react'
import AddGuessable from './AddGuessable.js'
import AddPlayer from './AddPlayer.js'
import AddPrediction from './AddPrediction.js'

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

    if (this.props.createdContest == null) {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <div className="input-wrap">
              <h1>Enter Name Of Contest</h1>
              <input className="form-text" type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <input className="form-submit" type="submit" value="Submit Contest Title" />
          </form>
        </>
      )
    }

    if (this.props.createdContest != null) {
      return (
        <>
        
          <AddPlayer onPlayerSubmit={this.props.onPlayerSubmit} />
          <AddPrediction createdGuessable={this.props.createdGuessable} createdPlayer={this.props.createdPlayer} onPredictionSubmit={this.props.onPredictionSubmit} />
        </>
      )
    }
    return null
  }
}


export default ContestForm
