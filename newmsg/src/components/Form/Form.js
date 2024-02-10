import { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Form.style.css';

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
        <form className="Forms" onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange} type="text"
                className="Windows" color="success" focused
                inputRef={inputRef}></TextField>
            <Button className="btnSub" type="submit"
                variant="contained" color="success">
                Отправлять</Button>
        </form >
    )
}