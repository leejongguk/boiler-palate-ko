import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../../_actions/user_action';
import Axios from 'axios';

function RegisterPage(props) {

    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()

        if(Password !== ConfirmPassword){
            return alert('비밀번호가 일치하지 않습니다.')
        }
        // console.log('email',Email)
        // console.log('password',Password)


        let body={
            email:Email,
            name:Name,
            password: Password
        }

        dispatch(registerUser(body))
            .then(response =>{
                if(response.payload.loginSuccess){
                    props.history.push('/')

                }else {
                    alert('Error')
                }
            })

        }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
                <form style={{ display: 'flex', flexDirection:'column'}}
                    onSubmit={onSubmitHandler}    
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Name</label>
                    <input type="Text" value={Name} onChange={onNameHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    
                    <label>Confirm Password</label>
                    <input type="Password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                    <br />
                    <button>
                        Sign Up
                    </button>
                </form>
        </div>
    )
}

export default RegisterPage
