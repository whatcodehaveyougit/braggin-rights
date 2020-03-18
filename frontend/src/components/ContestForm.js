import React, { Component } from 'react'
import { Redirect, useHistory } from "react-router-dom"


class ContestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      redirect: false
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // When I go stateless then this will work
    // this.history = useHistory().bind(this)
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
      title: "",
      // redirect: true
    })
    this.history.push("/")
    // setRedirect = () => {
    //   this.setState({
    //     redirect: true
    //   })
    // }
    // renderRedirect = () => {
    //   if (this.state.redirect) {
    //     return <Redirect to='/' />
    //   }
    // }
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }




  render() {

      // if (this.state.redirect) return <Redirect to="/" />

      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <div className="input-wrap">
              <h1>Enter Name Of Contest</h1>
              <input className="form-text" type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <input className="form-submit" type="submit" value="Submit"/>
          </form>
        </>
      )
    }
}


export default ContestForm
