import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_actions';
import { withRouter } from "react-router-dom";

const RegisterPage  = (props) => {
    const dispatch = useDispatch();

    const [Email, setEamil] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');


    const onChangeEmailHandler = (e) => {
        setEamil(e.target.value);
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onChangeNameHandler = (e) => {
        setName(e.target.value)
    }

    const onChangeConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body)).then(response => {
           if(response.payload.success) {
               props.history.push('/login')
           } else {
               alert("Failed to sign up")
           }
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label htmlFor="">Email</label>
                <input type="email" value={Email} onChange={onChangeEmailHandler}/>
                <label htmlFor="">Name</label>
                <input type="text" value={Name} onChange={onChangeNameHandler}/>
                <label htmlFor="">Password</label>
                <input type="password" value={Password} onChange={onChangePasswordHandler}/>
                <label htmlFor="">Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onChangeConfirmPasswordHandler}/>
                <br/>
                <button>회원가입</button>
            </form>
        </div>
    );
}

export default withRouter(RegisterPage);