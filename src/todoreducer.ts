import { Todo, TodoAction } from './Type';

// Define el reducer para manejar las acciones
export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case 'Add Todo':
            return [...state, action.payload];

        case 'Delete Todo':
            return state.filter(todo => todo.id !== action.payload);

        case 'Complete Todo':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case 'Update Todo':
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, description: action.payload.description }
                    : todo
            );

        default:
            return state;
    }
};
