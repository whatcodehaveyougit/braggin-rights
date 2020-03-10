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
      contests:  [],
      createdContest: null
    }
    this.handleContestSubmit = this.handleContestSubmit.bind(this);
    this.handleGuessableSubmit = this.handleGuessableSubmit.bind(this);
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
        title: submittedContest.title
      })
    })
    .then(res => res.json())
    .then(contest =>{
          // console.log(contest)
          const updatedContests = [...this.state.contests, contest];
          this.setState({
            createdContest: contest,
            contests: updatedContests
          });
        })
  }

  handleGuessableSubmit(postUrl, submittedGuessable){
    console.log(submittedGuessable);
    console.log(postUrl.url._links.self)

    // fetch('http://localhost:8080/contests', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title: submittedContest.title
    //   })
    // })
    // .then(res => res.json())
    // .then(contest =>{
    //       // console.log(contest)
    //       const updatedContests = [...this.state.contests, contest];
    //       this.setState({
    //         createdContest: contest,
    //         contests: updatedContests
    //       });
    //     })
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
            render={() => <ContestForm onContestSubmit={this.handleContestSubmit} onGuessableSubmit={this.handleGuessableSubmit} 
            createdContest={this.state.createdContest} />}
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
