import React from 'react';
import './GuessableList.css'

function GuessableList({ selectedContest, onGuessableClick }) {

  function handleEvent(event) {
    onGuessableClick(event.target.value)
  }

  if (selectedContest != null) {
    return (
      <>
        <h3 className="title-text">{selectedContest.title} Predictions</h3>
        <ul className="guessable-list">
          {selectedContest.guessables.map(guessable => {
            return <li value={guessable.id} key={guessable.id} onClick={handleEvent}>{guessable.title}</li>
          })}
        </ul>
      </>
    )
  } return null
}

export default GuessableList;
