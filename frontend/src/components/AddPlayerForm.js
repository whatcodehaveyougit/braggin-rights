import React, { Component } from 'react'

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit} className="">
      <section>
        <h1 className="title-text">Add a Player and Predictions</h1>
        <h2>Player Name</h2>
            <input className="form-text" name="name" value={this.state.name} onChange={this.handleChange} />
          <div>
            <input className="form-submit" type="submit" value="Submit Player" />
          </div>
        </section>
       
    </form>
    )
  }

}

export default AddPlayerForm
