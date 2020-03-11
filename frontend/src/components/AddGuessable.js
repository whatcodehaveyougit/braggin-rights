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

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
          <h3>Once Adding the contest title add your first guessable!</h3>
            <p>First Guessable</p>
              <input value={this.state.guessable} onChange={this.handleGuessableChange} />
            <div>
              <input type="submit" value="Submit Guessable Title" />
            </div>
        </form>
        )
    }
    
}
export default AddGuessable
