import React, { Component } from 'react'

class App extends Component {

  state = {
    favFoods: ['pizza', 'pizza', 'pizza']
  }

  render () {
    let favoriteFood = this.state.favFoods.map((food, index)=> <li key= {index}>{food}</li>)
    return (
      <div>
        <ul>
          {favoriteFood}
        </ul>
      </div>
    )
  }
}

export default App
