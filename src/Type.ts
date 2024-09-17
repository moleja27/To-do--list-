// types.ts

export interface Todo {
    id: number | string;
    description: number;
    done: boolean;
}
}

export type TodoAction =
    | { type: 'Add Todo'; payload: Todo }
    | { type: 'Delete Todo'; payload: number }
    | { type: 'Complete Todo'; payload: number }
    | { type: 'Update Todo'; payload: { id: number; description: string } };
