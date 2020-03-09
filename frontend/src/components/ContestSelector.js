import React from 'react';
import './ContestSelector.css';

const ContestSelector = ({contests, onContestSelected}) => {

  const contestsList = contests.map( contest => {
      return <li value={contest.id} key={contest.id} onClick={handleChange}>{contest.title}</li>
    })

    function handleChange(event){
        onContestSelected(event.target.value);
    }

    return (
      <ul>
        {contestsList}
      </ul>
    )

}

export default ContestSelector;
