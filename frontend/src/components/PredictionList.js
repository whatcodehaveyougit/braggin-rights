import React from 'react';
import './PredictionList.css';

function PredictionList({selectedGuessable}){

  if(selectedGuessable != null){
      return(
        <>
        <ul className="prediction-list">
        {selectedGuessable._embedded.predictions.map( prediction => {
          return <li value={prediction.id} key={prediction.id} >{prediction.player.name} predicts {prediction.predictionTitle}</li>
        })}
        </ul>
        </>
      )} return null
}

export default PredictionList;
