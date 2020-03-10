import React, { Component } from 'react'
import ContestList from '../components/ContestList.js'
import Contest from '../components/Contest.js'
import NavBar from '../components/NavBar'
import {BrowserRouter as Router, Route } from "react-router-dom"
import ContestForm from '../components/ContestForm.js'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      contests:  []
    }
    this.handleContestSubmit = this.handleContestSubmit.bind(this);
  }

  componentDidMount(){
      const url = 'http://localhost:8080/contests'

      fetch(url)
      .then(res => res.json())
      .then(contests => this.setState({ contests: contests._embedded.contests }))
      .catch(err => console.error);
  }

  handleContestSubmit(submittedContest) {
    console.log(submittedContest);

    fetch('http://localhost:8080/contests', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: submittedContest.title,
        // guessables: submittedContest.guessableArray
      })
    }).then(()=>{
          const updatedContests = [...this.state.contests, submittedContest];
          this.setState({
            contests: updatedContests
          });
        }).then(()=>{
          const url = 'http://localhost:8080/contests'
          fetch(url)
          .then(res => res.json())
          .then(contests => this.setState({ contests: contests._embedded.contests }))
          .catch(err => console.error);
        })
  }

  render() {
    return(
      <Router>
        <React.Fragment>
        <NavBar/>
            <Route
            path={`/contests/:id`}
            component={Contest}
            />
            <Route
            path="/add-contest"
            render={() => <ContestForm onContestSubmit={this.handleContestSubmit} />}
            />
            <Route
            exact
            path="/"
            render={() => <ContestList contests={this.state.contests} />}
            />
        </React.Fragment>
      </Router>

    )
  };
}
;
export default Dashboard;
