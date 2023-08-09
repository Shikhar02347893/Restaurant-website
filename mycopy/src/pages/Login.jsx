import React, { useState } from 'react'
import '../components-css/Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <div className='login'>
                <form className='login-form'>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Log in</button>
                </form>
            </div>
        </>
    )
}

export default Login
