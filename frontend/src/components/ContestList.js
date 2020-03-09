import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Contest from './Contest'
import ContestSelector from './ContestSelector'


class ContestList extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedContest: ""
    }
    this.handleContestSelected = this.handleContestSelected.bind(this)
    this.getContestById = this.getContestById.bind(this)
  }


  handleContestSelected(id){
    this.setState({selectedContest: id})
  }

  getContestById(){
    const selectedContest = this.props.contests.find(contest => {
      return contest.id == this.state.selectedContest
    })
    return selectedContest
  }

  render(){
    return(
      <>
      <h2>Your Contests</h2>
      <ContestSelector contests={this.props.contests} onContestSelected={this.handleContestSelected} />
      <Contest selectedContest={this.getContestById()} />
      </>
    )
  }

}

export default ContestList;
