import React from "react"
import answerStore from "./answerStore"

class Questionaire extends React.Component {
  constructor () {
    super()
    this.answerStore = new answerStore()
    this.state = {
      answers: this.answerStore.answers
    }
  }

  setAnswer(position, value) {

  }

  render() {
    return (
      <div>
        something
        {this.state.answers}
      </div>
    )
  }

}

export default Questionaire
