import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { logIn, signUp } from '../../services/firebase';
import './home.style.css';


// export const Home = (onAuth) => {
export const Home = ({ isSignUp }) => {
    const [error, setError] = useState("");
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <>
            <div className='Home_first'>
                < h1 className='first' > Добро пожаловать мой первый Message </h1 >
                <LoginForm onSubmit={handleSubmit} />
                {!!error && <h4>{error}</h4>}
                <Link className='linkAuth' to={isSignUp ? "/" : "/signup"}>
                    {isSignUp ? "to login" : "to signup"}
                </Link>
            </div>
        </>
    );
};
