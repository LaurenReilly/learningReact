import React, { Component } from 'react';
import TodoItem from './TodoItem';

import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      //todo is passed to TodoItem as a prop! needs a unique key which we created when we made our array of objects
      <div>
          <TodoItem key={todo.id} todo={todo} />
      </div>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;