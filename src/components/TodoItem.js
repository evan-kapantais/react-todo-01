import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: 10,
      borderBottom: '1px solid #ccc',
      textDecoration: this.props.todo.done ?
      'line-through' : 'none',
      color: '#000',
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} style={{marginRight: 20}}/>
          { title }
          <button style={{float: 'right'}} onClick={this.props.deleteTodo.bind(this, id)}>DELETE</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;