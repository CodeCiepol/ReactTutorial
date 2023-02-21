import React from 'react';
import Todo from '../models/todo'
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onSubTodo: (id: string)=>void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <li className={classes.item} key={item.id}>
          <TodoItem {...item} onSubTodo={props.onSubTodo}/>
        </li>
      ))}
    </ul>
  );
};

export default Todos
