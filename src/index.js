import React, { Component } from "react"
import { render } from "react-dom"
import MagicHat from "react-magic-hat"
import PageRouter from "./PageRouter"

import { ItemsContainer } from "./ui"
import "./App.css"

class App extends Component {
  state = {
    isAnimating: false
  }

  onStartAnimation = () => this.setState({ isAnimating: true })
  onEndAnimation = () => this.setState({ isAnimating: false })

  renderFrame = pageObject => {
    return <PageRouter isAnimating={this.state.isAnimating} {...pageObject} />
  }

  render() {
    return (
      <div className="App">
        <ItemsContainer vertical={false}>
          <MagicHat
            moveSeed={`${false}`}
            onStartAnimation={this.onStartAnimation}
            onEndAnimation={this.onEndAnimation}
            renderFrame={this.renderFrame}
          />
        </ItemsContainer>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
