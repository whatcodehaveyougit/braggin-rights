import React from 'react';
import './GuessableList.css'

function GuessableList({selectedContest, onGuessableClick}){

  function handleEvent(event){
    onGuessableClick(event.target.value)
  }

  if(selectedContest != null){
      return(
        <>
          <div id="selected-contest-title-wrapper">
            <h3>{selectedContest.title}</h3>
          </div>
          <ul className="guessable-list">
          {selectedContest.guessables.map( guessable => {
            return <li value={guessable.id} key={guessable.id} onClick={handleEvent}>{guessable.title}</li>
          })}
          </ul>
        </>
      )} return null
}

export default GuessableList;
