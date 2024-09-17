import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

interface Todo {
    id: number | string;
    description: string;
    done: boolean;
}

interface TodoItemProps {
    todo: Todo;
    handleUpdateTodo: (id: number | string, description: string) => void;
    handleDeleteTodo: (id: number | string) => void;
    handleCompleteTodo: (id: number | string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
    return (
        <li>
        <span onClick= {() => handleCompleteTodo(todo.id)}>
            <label className={ `container-done ${todo.done ? 'active' : ''}` }> </label>
                </span>
                < TodoUpdate todo = { todo } handleUpdateTodo = { handleUpdateTodo } />
                    <button className='btn-delete' onClick = {() => handleDeleteTodo(todo.id)}>
                        <FaTrash />
                        </button>
                        </li>
    );
};
