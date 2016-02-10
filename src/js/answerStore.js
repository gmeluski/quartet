class answerStore {
  constructor() {

    this.answerData = Array(9).fill(0)
  }


  get answers() {
    return this.answerData
  }

  get total() {
    return this.answerData.reduce((a, b) => { return a + b }, 0)
  }

}

export default answerStore

