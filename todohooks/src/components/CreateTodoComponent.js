import React, { useContext, useState } from 'react';
import TodoContext from '../store/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/TodoActions';
import '../css/CreateTodoComponent.css';

export const CreateTodoComponent = (props) => {

    const { dispatch } = useContext(TodoContext);

    const initialState = {
        title: "",
        content: ""
    }

    const [state, setState] = useState(initialState);

    const saveTodo = (e) => {
        e.preventDefault();
        const todo = {
            id: uuidv4(),
            content: state.content,
            title: state.title,
            completed: false
        }
        dispatch(addTodo(todo));
    }

    const cancelTodo = (e) => {
        e.preventDefault();
        setState({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form onSubmit={saveTodo}>
                <div className={"todo_form_container"}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title..." value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} />
                    <label htmlFor="content">Content</label>
                    <textarea name="content" placeholder="Content..." value={state.content} onChange={(e) => setState({ ...state, content: e.target.value })}></textarea>
                </div>
                <input type="submit" name="submit" value="Submit" className={"todo_from_save"} />
                <input type="submit" name="cancel" value="Cancel" onClick={(e) => cancelTodo(e)} className={"todo_from_cancel"} />
            </form>

        </div>
    )
}
