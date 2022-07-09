import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { fetchAsyncLogup } from 'store/slices/gameSlice';
import hasEmptyValueInObject from 'utils/hasEmptyValueInObject/hasEmptyValueInObject';
import "./RegisterScreen.scss"
const RegisterScreen = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        account: "",
        name: "",
        password: '',
        phone: '',
        dateOfBirth: '',
        gmail: '',
        avatar: null,
        role: "CLIENT"
    })
    const onSubmit = (e) => {
        e.preventDefault()
        if (hasEmptyValueInObject(value)) {
            toast.warn('Fields cannot be left blank!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            dispatch(fetchAsyncLogup(value))
            toast.success('Sign Up Success!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push("/login")
        }
    }
    const onChange = (e) => {
        const target = e.target
        console.log(target)
        setValue({ ...value, [target.name]: target.value })
        console.log(value)

    }
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="register-form">
                            <form onSubmit={onSubmit} autoComplete="off">
                            <div className="title-general"><h2>REGISTER</h2></div>
                                <div className="user-label">
                                    <label>Account</label>
                                    <div className="user-box">
                                        <input type="text" name="account" value={value.account} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>Name</label>
                                    <div className="user-box">
                                        <input type="text" name="name" value={value.name} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>Password</label>
                                    <div className="user-box">
                                        <input type="password" name="password" value={value.password} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>Phone</label>
                                    <div className="user-box">
                                        <input type="text" name="phone" value={value.phone} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>Date Of Birth</label>
                                    <div className="user-box">
                                        <input type="text" name="dateOfBirth" value={value.dateOfBirth} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>Gmail</label>
                                    <div className="user-box">
                                        <input type="text" name="gmail" value={value.gmail} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="button-bubble">       <button>SUBMIT</button></div>
                         
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;