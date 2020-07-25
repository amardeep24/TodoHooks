import React, { useReducer } from 'react'
import TodoContext from '../store/TodoContext';
import TodoReducer from '../store/TodoReducer';


export const TodoProvider = (props) => {

    const initialState = {
        todos: []
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const contextData = {
        state,
        dispatch
    };

    return (
        <div>
            <TodoContext.Provider value={contextData}>
                {props.children}
            </TodoContext.Provider>
        </div>
    )
}
