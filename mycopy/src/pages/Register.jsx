import React, { useState } from 'react'
import '../components-css/Login-Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [username, setUsername] = useState('')
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

    const notify = (value) => {
        const message =  {
            className: "toast-position",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            }
        switch (value) {
            case 1:
                toast.warn("Password should contain atleast 8 characters", message)                
                break;
            case 2:
                toast.warn("Use atleast one lowercase alphabet", message)                           
                break;
            case 3:
                toast.warn("Use atleast one uppercase alphabet", message)                    
                break;
            case 4:
                toast.warn("Use atleast one digit", message)                       
                break;
            case 5:
                toast.warn("Use atleast one special character", message)         
                break;
            default:
                break;
        }
    }

    function RegisterUser(e){
        e.preventDefault();
        let lowerCase = 0;
        let upperCase = 0;
        let digits = 0; 
        let specialCharacters = 0;
        let flag = 0;

        if(password.length < 8){        
            notify(1);
            return;
        }

        for(let i = 0; i < password.length; i++){
            if(password[i] >= 'a' && password[i] <= 'z'){
                lowerCase++;
            }else if(password[i] >= 'A' && password[i] <= 'Z'){
                upperCase++;
            }else if(password[i] >= '0' && password[i]<= '9'){
                digits++;
            }else{
                specialCharacters++;
            }

            if(lowerCase !== 0 && upperCase !== 0 && digits !== 0 && specialCharacters !==0){
                flag = 1;
                break;
            }
        }

        if(flag === 0){

            if(lowerCase === 0){
                notify(2);
            }else if(upperCase === 0){
                notify(3);
            }else if(digits === 0){
                notify(4);
            }else if(specialCharacters === 0){
                notify(5);
            }
            return;
        }

    }
    return (
        <>
            <div className='login-register'>
                <form className='login-register-form' onSubmit={RegisterUser}>
                    <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Register</p>

                    <div className="input-icons">
                        <i className="fa fa-user icon"></i>
                        <input className="input-field"
                            type="text"
                            placeholder="Username" onChange={(e) => {
                                setUsername(e.target.value)
                            }} 
                            required />
                    </div>
        
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

                    <div className="input-icons">
                        <i onClick={showPassword}  className={`fa fa${eyeicon} icon`} style={{cursor: 'pointer'}}></i>
                        <input className="input-field"
                            type={`${visibility}`}
                            placeholder="Confirm password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} 
                            required />
                    </div> 
                    <button type='submit' >Register</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Register
