import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main/Main'
import React, { Component } from 'react'
class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    )
  }
}
export default App
