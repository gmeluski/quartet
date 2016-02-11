import React from "react/addons"
import {expect} from "chai"

describe("questionaire", function () {
  let Questionaire
  let TestUtils

  function createComponent(component, props, children) {
    let shallowRenderer = TestUtils.createRenderer()

    shallowRenderer.render(React.createElement(component, props,
      children.length > 1 ? children : children[0]))
    return shallowRenderer.getRenderOutput()
  }

  beforeEach(function () {
    TestUtils = React.addons.TestUtils
    Questionaire = require("../src/js/Questionaire")
  })

  it("adds commas as appropriate", function () {
    let questionaire = createComponent(TagList,
      {tags: fakeTags, comma: true}, "")

    expect(questionaire.props.children).to.be.empty
  })

})
