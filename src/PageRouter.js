import React, { Component } from "react"
import { Hovered, Frame } from "./ui"
import InitForm from "./Pages/InitForm"

export default class PageRouter extends Component {
  // { id, page, activePage, state, actions } = this.props

  handleClick = event => {
    return !this.props.isAnimating
      ? this.props.page === this.props.activePage
        ? this.goForward(event)
        : this.goBack(event)
      : null
  }

  goBack = event => {
    event.stopPropagation()
    const { actions, activePage } = this.props
    actions.closeFrame(activePage)
  }

  goForward = event => {
    event.stopPropagation()
    const { actions } = this.props
    actions.setNextFrame()
  }

  render() {
    return (
      <Frame
        onClickClose={this.goBack}
        isActive={this.props.page === this.props.activePage}
        pageNum={this.props.page}>
        <Hovered>
          <InitForm {...this.props} order={1} />
          <InitForm {...this.props} order={2} />
          <button onClick={this.handleClick}>handleClick</button>
        </Hovered>
      </Frame>
    )
  }
}
