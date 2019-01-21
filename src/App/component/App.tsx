import React, { Component } from "react"
import "./App.css"
import { BigNumber } from "./BigNumber"

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Solver</p>
          {/* <p>Uffes Manual Sudoku Solver</p> */}
        </header>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
          <BigNumber box={n} key={n} />
        ))}
      </div>
    )
  }
}
