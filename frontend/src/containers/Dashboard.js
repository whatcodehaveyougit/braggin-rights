import React, { Component } from 'react'
import ContestList from '../components/ContestList.js'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            contests:  [ ]
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
