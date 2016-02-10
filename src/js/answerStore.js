class answerStore {
  constructor() {
    this.answerData = Array(9).fill(0)
    this.hello = this.hello
  }

  get answers() {
    return this.answerData
  }

  get total() {
    return this.answerData.reduce((previousValue, currentValue) => {
      return parseInt(previousValue, 10) + parseInt(currentValue, 10)
     }, 0)
  }

  setAnswer(position, value) {
    this.answerData[position] = value
  }

}

export default answerStore
