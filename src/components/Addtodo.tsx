import { FormEvent ,useState } from 'react'
import { useTodos } from '../store/todos'


const Addtodo =() => {

    const [todo, setTodo] = useState<string>("")
    const {handelAddToDo} = useState<string>();

    const handelSumit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        handelAddToDo(todo)
        setTodo("")
    } 

  return (
    <>
      <form onSubmit={handelSumit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'> Add Todo</button>
      </form>
    </>
  )
}

export default Addtodo
