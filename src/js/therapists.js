import React from "react"

class Therapists extends React.Component {
  constructor () {
    super()

    this.state = {
      selectedName: null,
    }

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
      return <div key={index} onClick={this.setTherapist.bind(this, name)}>{name}</div>
    })
  }

  /**
   * set the therapist
   */
  setTherapist(name) {
    this.setState({selectedName: name})
  }

  /**
   * send out the selected therapist
   */
  sendTherapist() {
    this.props.handleClick(this.state.selectedName)
  }

  render() {
    let scoreThreshold = 10
    if (this.props.score >= scoreThreshold) {
      return (
        <div>
          {this.getTherapists()}
          <button onClick={this.sendTherapist.bind(this)}>Submit</button>
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
