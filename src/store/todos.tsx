import { createContext, ReactNode, useContext, useState } from "react";


export type TodoProviderProps = {
    children : ReactNode
}

export type Todo ={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext ={
    todos: Todo[];
    handelAddToDo:(task:string) => void;
    toggleTodoAsCompleted:(id:string) => void;
    handleDeleteTodo:(id:string) => void;
}


export const todosContext = createContext<TodosContext | null >(null)

export const TodoProvideer = ({children}:TodoProviderProps) =>{
    const [todos , setTodos] = useState<Todo[]>([])

    const handelAddToDo = (task:string) =>{
        setTodos((prev)=>{
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            console.log("my prev ", prev)
            console.log(newTodos)
            return newTodos
        })
    }

    // mark compled
    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev)=>{
            let newTodos = prev.map((todo)=>{
                if(todo.id === id){
                    return{ ...todo, completed:!todo.completed}
                }
                return todo
            }) 
            return newTodos
        })

    }


    const handleDeleteTodo = (id:string) =>{
       
        setTodos((prev)=>{
            let newTodos = prev.filter((filterTodo) => filterTodo.id !== id)
            return newTodos 
        })
    }



 return <todosContext.Provider value={{todos , handelAddToDo, toggleTodoAsCompleted, handleDeleteTodo}}>
    {children}
 </todosContext.Provider>
}                                   


//consumer
export const useTodos = () => {
    const todoConsumer = useContext(todosContext);
    if(!todoConsumer){
        throw new Error("useTodo used outside of Provider");
    }

    return todoConsumer;
}