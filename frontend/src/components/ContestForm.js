import React, { Component } from 'react'

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
    // if (!title) {
    //   return
    // }
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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        <input type="submit" value="Post" />
      </form>
    )
  }
}


export default ContestForm
