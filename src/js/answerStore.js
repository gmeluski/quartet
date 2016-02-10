class answerStore {
  constructor() {

    this.answerData = Array(9).fill(0)
  }


  get answers() {
    return this.answerData
  }

}

export default answerStore

