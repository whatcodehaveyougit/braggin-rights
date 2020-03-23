import React from 'react';
import './AddPredictionForm.css'

function AddNewButtonPlayer (props) {

function addNewPlayer(event) {
    event.preventDefault();
    console.log("test")
}

if(props.createdPlayer != null){
    return (
        <form class="button wrapper" onSubmit={addNewPlayer} >
            <button className="form-submit prediction add-new-player" >Add Another Player</button>
        </form>
    )} return null

}

export default AddNewButtonPlayer;