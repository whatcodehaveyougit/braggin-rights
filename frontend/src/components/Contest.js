import React from 'react';
import './Contest.css'

function Contest({selectedContest}) {
  if(selectedContest != null){
    return (
      <>
      <h3>
      {selectedContest.title}
      </h3>
      </>
  )}
  return null

}

export default Contest;
