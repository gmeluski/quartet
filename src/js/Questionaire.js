import React from "react"
import answerStore from "./answerStore"
import Question from "./question"
import Therapists from "./therapists"
import Messaging from "./messaging"

class Questionaire extends React.Component {
  constructor () {
    super()
    this.answerStore = new answerStore()
    this.state = {
      answers: this.answerStore.answers,
      score: this.answerStore.total,
      currentDoctor: null,
    }

    this.questions = [
      "Little interest or pleasure in doing things?",
      "Feeling down, depressed, or hopeless?",
      "Trouble falling or staying asleep, or sleeping too much?",
      "Feeling tired or having little energy?",
      "Poor appetite or overeating?",
      "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
      "Trouble concentrating on things, such as reading the newspaper or watching television?",
      "Moving or speaking so slowly that other people could have noticed?",
      "Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
      "Thoughts that you would be better off dead, or of hurting yourself in some way?",
    ]
  }

  updateDoctor(doctorName) {
    return (event) => {
      this.setState({currentDoctor: doctorName})
    }
  }

  setAnswer(position, value) {
    this.answerStore.setAnswer(position, value)
    this.setState({score: this.answerStore.total})
  }

  getQuestions() {
    return this.questions.map((question, i) => {
      return <Question handleAnswer={this.setAnswer.bind(this)}
        questionText={question} key={i} questionIndex={i} />
    })

  }

  render() {
    return (
      <div>
        <Messaging doctor={this.state.currentDoctor} />
        {this.getQuestions()}
        <div>
          Your score: {this.state.score}
        </div>
        <Therapists score={this.state.score}
          handleClick={this.updateDoctor.bind(this)} />
      </div>
    )
  }

}

export default Questionaire
