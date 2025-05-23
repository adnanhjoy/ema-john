import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { loginUser, signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => console.error(error))
    }

    const signInWithGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={signIn} className='form-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" placeholder='email' name='email' required />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" placeholder='password' name='password' required />
                    </div>
                    <div className='form-group'>
                        <button className='login-btn'>Login</button>
                    </div>
                    <p className='form-group'>You don't have an account ? <Link to='/signup' className='link-btn'>Signup</Link></p>
                </form>
                <div className='form-group'>
                    <button onClick={signInWithGoogle} className='google-btn'>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;