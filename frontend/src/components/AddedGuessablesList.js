import React from 'react'

function AddedGuessablesList (props) { 
    
    if(props.guessablesAdded){
        return (
            <ul className="guessable-list">
            {props.createdContest.guessables.map(guessable => {
              return <li value={guessable.id} key={guessable.id}>{guessable.title}</li>
            })}
            </ul>       
        )
    }
}
    
    export default AddedGuessablesList;

