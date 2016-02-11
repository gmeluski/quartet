import React from "react"

class Therapists extends React.Component {
  constructor () {
    super()

    this.names = [
      "Dr. Zhivago",
      "Doctor Doom",
      "Doc Holliday",
    ]
  }

  /**
   * return the therapist elements
   *
   * @return {Array}
   */
  getTherapists() {
    return this.names.map((name, index) => {
      return <div key={index} onClick={this.props.handleClick(name)}>{name}</div>
    })
  }

  render() {
    let scoreThreshold = 10
    if (this.props.score >= scoreThreshold) {
      return (
        <div>
          {this.getTherapists()}
        </div>
      )
    } else {
      return (
        <span></span>
      )
    }
  }

}

export default Therapists
