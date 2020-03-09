import React, { Component } from 'react'
import ContestList from '../components/ContestList.js'
import Contest from '../components/Contest.js'
import NavBar from '../components/NavBar'
import {BrowserRouter as Router, Route, Link } from "react-router-dom"

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      contests:  []
    }
  }

  componentDidMount(){
    const url = 'http://localhost:8080/contests'

    fetch(url)
    .then(res => res.json())
    .then(contests => this.setState({ contests: contests }))
    .catch(err => console.error);
  }

  render() {
    return(
      <Router>
        <React.Fragment>
        <NavBar/>
            <Route
            path="/contests"
            render={() => <ContestList contests={this.state.contests} />}
            />
            <Route
            path={`/contests/:id`}
            component={Contest}
            />
        </React.Fragment>
      </Router>
    )
  };
}
export default Dashboard;
