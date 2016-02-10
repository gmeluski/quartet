import React from "react"

class Messaging extends React.Component {
  constructor () {
    super()
  }

  render () {
      if (this.props.doctor) {
        return (
          <div>You selected {this.props.doctor}. Thank you!!</div>
        )
      } else {
        return (
          <span></span>
        )
      }
  }
}

export default Messaging
