import React from 'react'
import Todo from '../models/todo'

const TodoItem: React.FC<{item: Todo, onSubTodo:(id: string)=>void}>=(props)=>{
    return(
        <>
        <div onClick={()=>props.onSubTodo(props.item.id)}>{props.item.text}</div>
        </>
    )
}
export default TodoItem