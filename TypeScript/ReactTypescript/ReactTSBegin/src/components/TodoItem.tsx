import React from 'react'
import Todo from '../models/todo'

const TodoItem: React.FC<{id:string, text:string, onSubTodo:(id: string)=>void}>=(props)=>{
    return(
        <>
        <div onClick={()=>props.onSubTodo(props.id)}>{props.text}</div>
        </>
    )
}
export default TodoItem