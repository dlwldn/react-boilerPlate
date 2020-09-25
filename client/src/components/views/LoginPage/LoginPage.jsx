import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';

const LoginPage  = (props) => {
    const dispatch = useDispatch();

    const [Email, setEamil] = useState('');
    const [Password, setPassword] = useState('');

    const onChangeEmailHandler = (e) => {
        setEamil(e.target.value);
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body)).then(response => {
            if(response.payload.loginSuccess) {
                props.history.push('/');
            } else {
                alert('error')
            }
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label htmlFor="">Email</label>
                <input type="email" value={Email} onChange={onChangeEmailHandler}/>
                <label htmlFor="">Password</label>
                <input type="password" value={Password} onChange={onChangePasswordHandler}/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;