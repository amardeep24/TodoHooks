export default (state, action) => {
    console.log(action.payload, state.todos.filter(({ id }) => id !== action.payload));
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.payload)
            }
        }
        case "COMPLETE_TODO": {
            const completedTodo = state.todos.find(({ id }) => id === action.payload);
            completedTodo.complete = true;
            return {
                ...state,
                todos: [...state.todos.filter(({ id }) => id !== action.payload), completedTodo]
            }
        }
    }
}