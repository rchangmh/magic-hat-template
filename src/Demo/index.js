import React, { Component } from "react"
import ArrowsV from "react-icons/lib/fa/arrows-v"
import ArrowsH from "react-icons/lib/fa/arrows-h"
import MagicHat from "react-magic-hat"
import { ItemsContainer, DemoToolbar, Hovered, Frame } from "../ui.js"
import PropTypes from "prop-types"
import InitForm from "./InitForm.js"

class Page extends Component {
  state = {
    isAnimating: false
  }

  onStartAnimation = () => this.setState({ isAnimating: true })
  onEndAnimation = () => this.setState({ isAnimating: false })

  static propTypes = {
    isActive: PropTypes.bool,
    pageNum: PropTypes.number,
    activePage: PropTypes.number,
    frames: PropTypes.shape({
      setNextFrame: PropTypes.func,
      setFrame: PropTypes.func
    })
  }

  goNext = event => {
    const { isActive, isAnimating } = this.props
    return !isAnimating
      ? isActive ? this.goForward(event) : this.goBack(event)
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
    actions.setNextFrame("dummy")
  }

  state = {
    myItems: ["first", "second"]
  }

  render() {
    const { isActive, pageNum } = this.props

    return (
      <Frame onClickClose={this.goBack} isActive={isActive} pageNum={pageNum}>
        <Hovered>
          <InitForm
            currentPage={pageNum}
            page={1}
            close={this.goBack}
            next={this.goNext}
          />
          <InitForm currentPage={pageNum} page={2} close={this.goBack} />
        </Hovered>
      </Frame>
    )
  }
}

export default class Demo extends Component {
  state = {
    vertical: false,
    isAnimating: false
  }

  setStackVertical = () => this.setState({ vertical: true })
  setStackHorizontal = () => this.setState({ vertical: false })
  onStartAnimation = () => this.setState({ isAnimating: true })
  onEndAnimation = () => this.setState({ isAnimating: false })

  renderFrame = props => {
    const { id, page, activePage, actions } = props
    return (
      <Page
        isActive={page === activePage}
        isAnimating={this.state.isAnimating}
        pageNum={page}
        activePage={activePage}
        actions={actions}
      />
    )
  }

  render() {
    return (
      <ItemsContainer vertical={this.state.vertical}>
        <MagicHat
          moveSeed={`${this.state.vertical}`}
          onStartAnimation={this.onStartAnimation}
          onEndAnimation={this.onEndAnimation}
          renderFrame={this.renderFrame}
        />
        <DemoToolbar>
          <ArrowsH onClick={this.setStackHorizontal} />
          <ArrowsV onClick={this.setStackVertical} />
        </DemoToolbar>
      </ItemsContainer>
    )
  }
}
