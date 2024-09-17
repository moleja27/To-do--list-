import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoreducer'; // Asegúrate de que el reducer esté en TypeScript también

interface Todo {
    id: number | string;
    description: string;
    done: boolean;
}

type TodoAction =
    | { type: 'Add Todo'; payload: Todo }
    | { type: 'Delete Todo'; payload: number | string }
    | { type: 'Complete Todo'; payload: number | string }
    | { type: 'Update Todo'; payload: { id: number | string; description: string } };

type TodoState = Todo[];

export const useTodo = () => {
    const initialState: TodoState = [];

    const init = (): TodoState => {
        return JSON.parse(localStorage.getItem('todos') || '[]');
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter((todo: Todo) => !todo.done).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo: Todo) => {
        const action: TodoAction = {
            type: 'Add Todo',
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id: number | string) => {
        const action: TodoAction = {
            type: 'Delete Todo',
            payload: id,
        };
        dispatch(action);
    };

    const handleCompleteTodo = (id: number | string) => {
        const action: TodoAction = {
            type: 'Complete Todo',
            payload: id,
        };
        dispatch(action);
    };

    const handleUpdateTodo = (id: number | string, description: string) => {
        const action: TodoAction = {
            type: 'Update Todo',
            payload: { id, description },
        };
        dispatch(action);
    };

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    };
};

