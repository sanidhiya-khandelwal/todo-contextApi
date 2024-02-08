import { createContext, useContext } from "react";

// context created with object
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: ' todo 1',
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

/** Context provided */
export const TodoProvider = TodoContext.Provider;

/** created custom hook which returns useContext */
export const useTodo = () => {
    return useContext(TodoContext)
}