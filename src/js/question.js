import React from "react"

class Question extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.values = [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
     ]
  }

  updateValue(e) {
    this.props.handleAnswer(this.props.questionIndex, e.target.value)
  }

  getInputs() {
    let thisGroup = "question-" + this.props.questionIndex

    return this.values.map((value, index)=>{
      return (
        <span key={index} className="radio-container">
          <input onClick={this.updateValue.bind(this)}
            name={thisGroup} type="radio" value={index} />
          <label>{value}</label>
        </span>
        )
    })

  }

  render() {
    return  (
      <div className="patient-question">
        <div className="question-text">
          {this.props.questionText}
        </div>
        <div>
          {this.getInputs()}
        </div>
      </div>
    )
  }

}

export default Question
