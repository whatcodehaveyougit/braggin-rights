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
    const selectedContest = this.props.contests.find(contest => {
      return contest.id == id
    })
    this.setState({selectedContest: selectedContest})
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
