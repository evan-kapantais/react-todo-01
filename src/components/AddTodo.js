import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  componentDidUpdate() {
    console.log(this.state.title);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <form 
        style={{display: 'flex'}}
        onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="title"
            placeholder="Add Todo.." 
            value={this.state.title}
            onChange={this.onChange}
            style={{flex: 10, padding: 10}}/>
          <input 
            type="submit" 
            value="submit" 
            className="btn" 
            style={{flex: 1}}/>
      </form>
    )
  }
}

export default AddTodo;