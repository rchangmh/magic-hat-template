import React, { Component } from "react"
import { Hovered, Frame } from "../ui.js"

export default class InitForm extends Component {
  state = {
    array: ["a", "b"]
  }

  render() {
    return (
      <div>
        {this.props.currentPage === this.props.page && (
          <div>
            <h3>{this.props.page}</h3>
            {this.props.next && <button onClick={this.props.next}>NEXT</button>}
          </div>
        )}
      </div>
    )
  }
}
