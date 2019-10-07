import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form style={{display: 'flex'}}>
        <label>
          <input type="text" 
           name="title"
           placeholder="Add Todo.." 
           style={{flex: '10', padding: 10}}/>
        </label>
        <label>
          <input type="submit" 
          value="submit" 
          className="btn" 
          style={{flex: 1}}/>
        </label>
      </form>
    )
  }
}

export default AddTodo;
