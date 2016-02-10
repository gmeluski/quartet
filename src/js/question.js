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

  getInputs() {
    let thisGroup = "question-" + this.props.key

    return this.values.map((value, index)=>{
      return (
        <div>
          <input name={thisGroup} type="radio" value={index} /> {value}
        </div>
        )
    })

  }

  render() {
    return (
      <div>
        <div>
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
