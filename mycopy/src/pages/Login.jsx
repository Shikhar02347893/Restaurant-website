import React, { useState } from 'react'
import '../components-css/Login-Register.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyeicon, setEyeIcon] = useState('-eye')
    const [visibility, setVisibility] = useState('password')

    function showPassword(){
        if(eyeicon === '-eye'){
            setEyeIcon('-eye-slash')
            setVisibility('text')
        }else if(eyeicon === '-eye-slash'){
            setEyeIcon('-eye')
            setVisibility('password')
        }
    }
    return (
        <>
            <div className='login-register'>
                <form className='login-register-form'>
                    <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Login</p>
                    <div className="input-icons">
                        <i className="fa fa-envelope icon"></i>
                        <input className="input-field"
                            type="email"
                            placeholder="Email" onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required />
                    </div>
                    <div className="input-icons">
                        <i onClick={showPassword}  className={`fa fa${eyeicon} icon`} style={{cursor: 'pointer'}}></i>
                        <input className="input-field"
                            type={`${visibility}`}
                            placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} 
                            required />
                    </div> 
                    <button>Log in</button>
                </form>
            </div>
        </>
    )
}

export default Login
