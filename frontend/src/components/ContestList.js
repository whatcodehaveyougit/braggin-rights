import React from 'react'

function ContestList ({contests}) {

  const listContests = contests.map(contest => {
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
