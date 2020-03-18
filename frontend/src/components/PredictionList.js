import React from 'react';
import './PredictionList.css';

function PredictionList({ selectedGuessable }) {

  if (selectedGuessable != null && selectedGuessable._embedded.predictions != null) {
    return (
      <>
        <ul className="prediction-list">
          {selectedGuessable._embedded.predictions.map(prediction => {
            return <ul className="list-of-predictions" value={prediction.id} key={prediction.id} >{prediction.player.name} - {prediction.predictionTitle}</ul>
          })}
        </ul>
      </>
    )
  } return null
}

export default PredictionList;
