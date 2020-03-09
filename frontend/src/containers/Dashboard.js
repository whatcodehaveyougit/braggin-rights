import React, { Component } from 'react'
import ContestList from '../components/ContestList.js'
import ContestForm from '../components/ContestForm.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: []
    };
    this.handleContestSubmit = this.handleContestSubmit.bind(this);

  }

  handleContestSubmit(submittedContest) {
    submittedContest.id = Date.now();
    const updatedContests = [...this.state.contests, submittedContest];
    this.setState({
      contests: updatedContests
    });
  }

  componentDidMount() {
    const url = 'http://localhost:8080/contests'

    fetch(url)
      .then(res => res.json())
      .then(contests => this.setState({ contests: contests }))
      .catch(err => console.error);
  }



  render() {
    return (
      <>
        <h1>
          Dashboard
        </h1>
        <ContestList contests={this.state.contests} />
        <ContestForm onContestSubmit={this.handleContestSubmit} />

      </>

    )
  }
}
;
export default Dashboard;
