import React, {useState} from 'react';
import './Contest.css';
import Guessable from './Guessable';

function Contest({selectedContest}) {

  const [selectedGuessable, setSelectedGuessable] = useState(null)

  if(selectedContest != null){

    const guessableList = selectedContest.guessables.map( guessable => {
        return <ul>
                  <li value={guessable.id} key={guessable.id} onClick={getGuessableId}>
                    {guessable.title}
                  </li>
                  <li>
                    {guessable.result}
                  </li>
                </ul>
      })

      // function getGuessableId(event){
      //   const selectedGuessable = selectedContest.guessables.find(guessable => {
      //     return guessable.id === event.target.value
      //   })
      //   setSelectedGuessable(selectedGuessable)
      // }

      function getGuessableId(event){
        const selectedGuessable = selectedContest.guessables.find(guessable => {
          return guessable.id === event.target.value
        })
        const correctId = selectedGuessable.id
        fetch(`http://localhost:8080/guessables/${correctId}`)
        .then(res => res.json())
        .then(fetchedGuessable => setSelectedGuessable(fetchedGuessable))
        .catch(err => console.error);

      }


    return (
      <>
        <h3>
          {selectedContest.title}
        </h3>
        <p>
          {guessableList}
        </p>
        <Guessable selectedGuessable={selectedGuessable} />
      </>
  )}
  return null

}

export default Contest;
