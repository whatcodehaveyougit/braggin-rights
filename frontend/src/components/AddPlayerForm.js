import React, { Component } from 'react'
import './player-form.css'

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleSubmit(event){
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

  render(){
    return(
    <form onSubmit={this.handleSubmit} className="">
      <section>
        <h1 className="title-text">Add a Player and Predictions</h1>
        <h2>Player Name</h2>
            <input className="form-text" value={this.state.name} onChange={this.handleNameChange} />
          <div>
            <input className="form-submit" type="submit" value="Submit Player" />
          </div>
        </section>
       
    </form>
    )
  }

}

export default AddPlayerForm
