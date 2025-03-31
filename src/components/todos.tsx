import React from 'react'
import { Todo, useTodos } from '../store/todos'

const Todos = () => {

    const { todos, toggleTodoAsCompleted , handleDeleteTodo} = useTodos();

    let filterData = todos;

  return (
    <div>

        <ul>
            {
                filterData.map((todo)=>{

                 return <li key={todo.id}>
                    <form action="">
                    <input type="checkbox" id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onChange={()=>toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={todo.id}>{todo.task}</label>

                    {
                        todo.completed && (
                            // <button type='sumbit' onChange={()=> handleDeleteTodo(todo.id)}>Detele</button>
                            <input type="button" value="Detele" onClick={()=> handleDeleteTodo(todo.id)}/>
                        )
                    } 
                    </form>
                 </li>
                        
                })
            }
        </ul>
    </div>
  )
}

export default Todos
