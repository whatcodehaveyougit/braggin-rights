import React, { Component } from 'react'
import AddPredictionForm from './AddPredictionForm.js'
import './AddPredictionForm.css'


class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      playerAdded: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
      const currentState = this.state.active;
      this.setState({ playerAdded: !currentState });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit} className="">
      <section className={this.state.playerAdded ? 'click-state': null }>
        <h1 className="title-text">Add a Player and Predictions</h1>
        <h2>Player Name</h2>
            <input className="form-text" name="name" value={this.state.name} onChange={this.handleChange} />
          <div>
            <input className="form-submit" type="submit" value="Submit Player" />
          </div>
        </section>
       
        { this.props.createdPlayer ? <AddPredictionForm selectedContest={this.props.selectedContest}
        createdPlayer={this.props.createdPlayer} onPredictionSubmit={this.props.onPredictionSubmit} /> : null }
      
    </form>
    )
  }

}

export default AddPlayerForm
