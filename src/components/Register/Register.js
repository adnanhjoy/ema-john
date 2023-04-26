import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Signup</h1>
                <form className='form-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" placeholder='email' name='email' />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" placeholder='password' name='password' />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="confirm">Confirm Password</label> <br />
                        <input type="password" placeholder='confirm' name='confirm' />
                    </div>
                    {/* <p className='form-group error-message'>{error}</p> */}
                    <div className='form-group'>
                        <button className='login-btn'>Signup</button>
                    </div>
                    <p className='form-group'>Already have an account ? <Link to='/login' className='link-btn'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;

// onSubmit={signupUser} 