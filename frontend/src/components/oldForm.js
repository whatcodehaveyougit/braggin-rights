import React, { Component } from 'react'

class AddPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.state.name;

    if (!name) {
      return
    }
    this.props.onPlayerSubmit({
      name: name
    })
    this.setState({
      name: ""
    })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add a Player!</h3>
        <input className="form-text" value={this.state.name} onChange={this.handleNameChange} />
        <div>
          <input className="form-submit" type="submit" value="Submit Player" />
        </div>
      </form>
    )
  }
}

export default AddPlayer
