import React from "react/addons"
import {expect} from "chai"

describe("therapists", function () {
  let Therapists
  let TestUtils

  function createComponent(component, props, children) {
    let shallowRenderer = TestUtils.createRenderer()

    shallowRenderer.render(React.createElement(component, props,
      children.length > 1 ? children : children[0]))
    return shallowRenderer.getRenderOutput()
  }

  beforeEach(function () {
    TestUtils = React.addons.TestUtils
    Therapists = require("../src/js/therapists")
  })

  it("is empty with no score", function () {

    let therapists = createComponent(Therapists.default, {}, "")
    expect(therapists.props.children).to.be.empty
  })

  it("shows with a qualifying score", function () {

    let therapists = createComponent(Therapists.default, {score: 10, handleClick: function () {}}, "")
    expect(therapists.props.children).to.have.length(3)
  })

})
