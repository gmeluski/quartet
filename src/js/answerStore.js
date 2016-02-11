class answerStore {
  constructor() {
    this.answerData = Array(9).fill(0)
    this.hello = this.hello
  }

  /*
   * getter for answers
   *
   * @return {Array}
   */
  get answers() {
    return this.answerData
  }

  /**
   * getter for the total
   *
   * @return {Number}
   */
  get total() {
    return this.answerData.reduce((previousValue, currentValue) => {
      return parseInt(previousValue, 10) + parseInt(currentValue, 10)
     }, 0)
  }

  /**
   * setter for the answers
   *
   * @param {String} position
   * @param {String} value
   */
  setAnswer(position, value) {
    this.answerData[position] = value
  }

}

export default answerStore
