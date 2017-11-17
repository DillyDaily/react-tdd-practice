import React, { Component } from 'react'

class App extends Component {

state = {
  todos: ['Feed Pesto', 'Learn React', 'Get Job']
}

  render () {
    let theTodos = this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)
    return (
      <div>
        <ul>
          {theTodos}
        </ul>
      </div>
    )
  }
}

export default App
