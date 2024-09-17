import React, { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

interface Todo {
    id: number | string;
    description: string;
    done: boolean;
}

interface TodoUpdateProps {
    todo: Todo;
    handleUpdateTodo: (id: number | string, description: string) => void;
}

export const TodoUpdate: React.FC<TodoUpdateProps> = ({ todo, handleUpdateTodo }) => {
    const { formState, onInputChange } = useForm({
        updateDescription: todo.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef<HTMLInputElement>(null);

    const onSubmitUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = todo.id;
        const description = formState.updateDescription;

        handleUpdateTodo(id, description);

        setDisabled(!disabled);

        focusInputRef.current?.focus();
    };

    return (
        <form onSubmit= { onSubmitUpdate } >
        <input
                type='text'
    className = {`input-update ${todo.done ? 'text-decoration-dashed' : ''}`
}
name = 'updateDescription'
value = { formState.updateDescription }
onChange = { onInputChange }
placeholder = '¿Qué hay que hacer?'
readOnly = { disabled }
ref = { focusInputRef }
    />
    <button className='btn-edit' type = 'submit' >
        <FaEdit />
        </button>
        </form>
    );
};
