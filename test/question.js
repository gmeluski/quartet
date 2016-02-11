import React from "react"
import {expect} from "chai"

describe("the question component", function () {
  const React = require("react/addons")

  let Question
  let TestUtils

  function createComponent(component, props, children) {
    let shallowRenderer = TestUtils.createRenderer()

    shallowRenderer.render(React.createElement(component.default, props,
      children.length > 1 ? children : children[0]))
    return shallowRenderer.getRenderOutput()
  }

  beforeEach(function () {
    TestUtils = React.addons.TestUtils
    Question = require("../src/js/question")
  })

  it("works", function () {
    let myProps = { }
    let question = createComponent(Question, myProps, "")
    expect(question.props.className).to.equal("patient-question")
    expect(question.props.children).to.have.length(2)
  })

})

