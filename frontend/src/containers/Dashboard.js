import React, { Component } from 'react'
import ContestList from '../components/ContestList.js'
import ContestForm from '../components/ContestForm.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: []
    };
    this.addContest = this.addContest.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:8080/contests'

    fetch(url)
      .then(res => res.json())
      .then(contests => this.setState({ contests: contests }))
      .catch(err => console.error);
  }

  addContest(event) {
    event.preventDefault();

    this.state.contests.add(event.target.value);
    // this.props.onCommentSubmit({
    //   this.state.contest.push();
    // })
  }


  render() {
    return (
      <>
        <h1>
          Dashboard
        </h1>
        <ContestList contests={this.state.contests} />
        <ContestForm addContest={this.addContest} />

      </>

    )
  };
}
export default Dashboard;
