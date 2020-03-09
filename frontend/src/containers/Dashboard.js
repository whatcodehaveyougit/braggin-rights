import React, { Component } from 'react'
import ContestList from '../components/ContestList.js'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            contests:  [ ]
        }
    }


    render() {
        return(
            <>
            <h1>
            Dashboard
        </h1>
        <ContestList contests= {this.state.contests} />
        </>

        )     
};
}
export default Dashboard;
