import React, { Component } from "react"

export default class InitForm extends Component {
  state = {
    array: ["a", "b"]
  }

  render() {
    const { id, page, activePage, handleClick, order } = this.props
    return (
      <div>
        {order === page && (
          <div>
            <h3>activePage: {activePage}</h3>
            {Object.entries(this.props).map(([key, value]) => (
              <p>
                {key}:{typeof value}:
                {typeof value === "string" ? value : JSON.stringify(value)}
              </p>
            ))}
            {handleClick && <button onClick={handleClick}>handleClick</button>}
          </div>
        )}
      </div>
    )
  }
}
