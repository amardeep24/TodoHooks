import React from 'react'
import { DeleteTodoComponent } from './DeleteTodoComponent';

export const TodoComponent = ({title, content, id}) => {
    return (
        <div>
            <div>{title}</div>
            <div>{content}</div>
            <DeleteTodoComponent id={id}/>
        </div>
    )
}
