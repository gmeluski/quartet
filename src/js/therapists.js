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

  handleClick() {
    this.props.docSelected()
  }

  getTherapists() {
    return this.names.map((name) => {
      return <div onClick={this.handleClick}>{name}</div>
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
