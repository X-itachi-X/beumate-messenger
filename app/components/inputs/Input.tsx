'use client';

import clsx from 'clsx';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
}   from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled;
}) => {
    return (
        <div>
            I am an input!
        </div>
    );
}

export default Input;