import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/img/login-img.png'
import "./LoginScreen.scss"
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { fetchAsyncLogin } from 'store/slices/gameSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
    const dispatch = useDispatch()
    const history =useHistory()
    const [value, setValue] = useState({
        account: "",
        password: "",
    })
    const onSubmit =  async (e) => {
        e.preventDefault()
        dispatch(fetchAsyncLogin(value)).unwrap().then(() => {
            history.push("/")
        }).catch((errorMessage) => {
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          })
    }
    const onChange = (e) => {
        const target = e.target
        setValue({ ...value, [target.name]: target.value })
    }
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="login-form">
                            <form onSubmit={onSubmit}>
                                <h2>LOGIN</h2>
                                <label>Account Name</label>
                                <input type="text" className="account-name" name="account" value={value.account} onChange={onChange} />
                                <label>Password</label>
                                <input type="password" className="account-name" name="password" value={value.password} onChange={onChange} />
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="login-section">
                            <div className="login-section__title">Sign up on Steam and discover thousands of games to play.</div>
                            <div className="login-section__img">
                                <img src={logo} alt="logo" />
                            </div>
                            <div>It's free and easy to use.</div>
                            <Link to="/register"><button>Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;