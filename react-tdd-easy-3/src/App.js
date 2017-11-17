import React, { Component } from 'react'

class App extends Component {

state = {
  bands: ['Green Day', 'Format', 'Brand New']
}

  render () {
    let theBands = this.state.bands.map((band, index) => <li key={index}>{band}</li>)
    return (
      <div>
        <ul>
          {theBands}
        </ul>
      </div>
    )
  }
}

export default App
