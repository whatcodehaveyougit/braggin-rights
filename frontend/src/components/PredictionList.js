import React from 'react';
import './Lists.css';

function PredictionList({selectedGuessable}){

  if(selectedGuessable != null){
      return(
        <>
        <ul class="data-list">
        {selectedGuessable._embedded.predictions.map( prediction => {
          return <li value={prediction.id} key={prediction.id} >{prediction.predictionTitle}</li>
        })}
        </ul>
        </>
      )} return null
}

export default PredictionList;
