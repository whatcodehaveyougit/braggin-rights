import React, { Component } from 'react'

class ContestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    if (!title) {
      return
    }
    this.props.onFormSubmit({
      title: title
    })
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

// function addContest(props) {
//   function handleClick() {
//     console.log("Hello from Contest Form")
//     props.addContest();
//   }

//   return (
//     <form onClick={handleClick}>
//       <input type="text" value="">
//         Test
//       </input>
//       <input type="submit" value="submit" >
//     </form>
//       )
//     }

export default ContestForm