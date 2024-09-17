import { useState } from 'react';

interface FormValues {
    [key: string]: string;
}

export const useForm = <T extends FormValues>(initialForm: T) => {
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        formState,
        onInputChange,
        onResetForm,
    };
};
