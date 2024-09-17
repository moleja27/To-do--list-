import React from 'react';
import { useForm } from '../hooks/useForm';

interface Todo {
    id: number | string;
    description: string;
    done: boolean;
}

interface TodoAddProps {
    handleNewTodo: (todo: Todo) => void;
}

export const TodoAdd: React.FC<TodoAddProps> = ({ handleNewTodo }) => {
    const { formState, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const { description } = formState;

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (description.length <= 1) return;

        const newTodo: Todo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        handleNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit= { onFormSubmit } >
        <input
                type='text'
    className = 'input-add'
    name = 'description'
    value = { description }
    onChange = { onInputChange }
    placeholder = '¿Qué hay que hacer?'
        />
        <button className='btn-add' type = 'submit' >
            Agregar
            </button>
            </form>
    );
};
