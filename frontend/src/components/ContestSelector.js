import React from 'react';

const ContestSelector = ({contests, onContestSelected}) => {

  const contestsList = contests.map( contest => {
      return <option value={contest.id} key={contest.id}>{contest.title}</option>
    })

    function handleChange(event){
        onContestSelected(event.target.value);
    }

    return (
      <select defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a contest...</option>
        {contestsList}
      </select>
    )

}

export default ContestSelector;
