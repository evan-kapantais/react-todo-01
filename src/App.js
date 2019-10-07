import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
          done: false
        },
        {
          id: 2,
          title: 'Walk the dog',
          done: false
        },
        {
          id: 3,
          title: 'Do some code',
          done: false
        }
      ],
      text: ''
    }
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = () => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;