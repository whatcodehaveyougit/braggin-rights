import React from 'react';
import {Link} from 'react-router-dom'
import Contest from './Contest'

function ContestList ({contests}) {

  const listContests = contests.map(contest => {
      // return <Link to={`/contests/${contest.id}`}><Contest contestTitle={contest.title}>{contest.title}</Contest></Link>
      return <li>{contest.title}</li>
    })

  return (
    <>
      <h2>ContestList</h2>
      <ul>
        {listContests}
      </ul>
    </>
  )
}

export default ContestList;
