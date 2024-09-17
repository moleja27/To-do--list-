import React from 'react';
import { TodoItem } from './TodoItem';

interface Todo {
    id: number | string;
    description: string;
    done: boolean;
}

interface TodoListProps {
    todos: Todo[];
    handleUpdateTodo: (id: number | string, description: string) => void;
    handleDeleteTodo: (id: number | string) => void;
    handleCompleteTodo: (id: number | string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
    return (
        <ul>
        {
            todos.map(todo => (
                <TodoItem
                    key= { todo.id }
                    todo = { todo }
                    handleUpdateTodo = { handleUpdateTodo }
                    handleDeleteTodo = { handleDeleteTodo }
                    handleCompleteTodo = { handleCompleteTodo }
                />
            ))
        }
        </ul>
    );
};
