import React from 'react';

function DeleteContest (props) {

function deleteContest(event) {
    event.preventDefault();
    props.onContestDelete(props.selectedContest.id)
}

if(props.selectedContest != null){
return (
<form onSubmit={deleteContest}>
<input type="submit" value="Delete contest" className="form-submit" />
</form>
)} return null

}

export default DeleteContest;