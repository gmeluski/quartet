import {expect} from "chai"

describe("the question component", function () {
  const React = require("react/addons")

  let Question
  let TestUtils

  function createComponent(component, props, children) {
    let shallowRenderer = TestUtils.createRenderer()

    shallowRenderer.render(React.createElement(component, props,
      children.length > 1 ? children : children[0]))
    return shallowRenderer.getRenderOutput()
  }

  beforeEach(function () {
    TestUtils = React.addons.TestUtils
    Question = require("../src/js/question")
  })

  it("works", function () {
    let question = createComponent(question, { authors: [] }, "")
    expect(authorList.props).to.be.empty
  })

})

