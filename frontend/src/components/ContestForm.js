import React, { Component } from 'react'

class ContestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      guessable1: "",
      guessable2: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this)
    // this.handleGuessable1Change = this.handleGuessable1Change.bind(this)
    // this.handleGuessable2Change = this.handleGuessable2Change.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const guessable1 = this.state.guessable1;
    const guessable2 = this.state.guessable2;
    if (!title) {
      return
    }
    this.props.onContestSubmit({
      title: title,
      guessable1: guessable1,
      guessable2: guessable2
    })
    
    this.setState({
      title: "",
      guessable1: "",
      guessable2: ""
    })
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }
  handleGuessable1Change(event) {
    this.setState({ guessable1: event.target.value })
  }
  handleguessable2Change(event) {
    this.setState({ guessable2: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-wrap">
        <p>Your Contest Title </p>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        <div className="input-wrap">
        <p>What are you predicting?</p>
          <input type="text" value={this.state.guessable1} onChange={this.handleGuessable1Change} />
        </div>
        <div className="input-wrap">
          <p>What is your prediction?</p>
          <input type="text" value={this.state.guessable2} onChange={this.handleGuessable2Change} />
        </div>
        <input type="submit" value="Post" />
      </form>
    )
  }
}


export default ContestForm
