import React from 'react';
import './Lists.css';

function GuessableList({selectedContest, onGuessableClick}){

  function handleEvent(event){
    onGuessableClick(event.target.value)
  }

  if(selectedContest != null){
      return(
        <>
        <ul class="data-list">
        {selectedContest.guessables.map( guessable => {
          return <li value={guessable.id} key={guessable.id} onClick={handleEvent}>{guessable.title}</li>
        })}
        </ul>
        </>
      )} return null
}

export default GuessableList;
