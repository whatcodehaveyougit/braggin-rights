import React, {Component} from 'react';
import Contest from './Contest'
import ContestSelector from './ContestSelector'


class ContestList extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedContest: null
    }
    this.handleContestSelected = this.handleContestSelected.bind(this)
  }

  handleContestSelected(id){
    const intId = parseInt(id)
    fetch(`http://localhost:8080/contests/${intId}`)
    .then(res => res.json())
    .then(contest => this.setState({ selectedContest: contest }))
    .catch(err => console.error);
  }

  render(){
    return(
      <>
      <h2>Your Contests</h2>
      <ContestSelector contests={this.props.contests} onContestSelected={this.handleContestSelected} />
      <Contest selectedContest={this.state.selectedContest} />
      </>
    )
  }

}

export default ContestList;
