import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { fetchAsyncEditInfor } from 'store/slices/gameSlice';
import hasEmptyValueInObject from 'utils/hasEmptyValueInObject/hasEmptyValueInObject';
import "./UserChange.scss";
const UserChange = () => {
    const state = useSelector(state => state.games.userLogin)
    const param = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [value, setValue] = useState({
        account: state.account,
        name: "",
        password: '',
        phone: '',
        dateOfBirth: '',
        gmail: '',
        avatar: "",
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
            dispatch(fetchAsyncEditInfor({
                userId: param.id,
                inforChange: value
            }))
            history.push("/")
        }

    }
    const onChange = (e) => {
        const target = e.target
        console.log(target)
        setValue({ ...value, [target.name]: target.value })
        console.log(value)

    }
    return (
        <div className="user-change">
            <div className="user-container">
                <form onSubmit={onSubmit} autocomplete="off">
                    <div className="user-label">
                        <label>Name</label>
                        <div className="user-box">
                            <input type="text" name="name" value={value.name} onChange={onChange}  />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </div>
                    </div>
                    <div className="user-label">
                        <label>Password</label>
                        <div className="user-box">
                            <input type="password" name="password" value={value.password} onChange={onChange}  />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </div>
                    </div>
                    <div className="user-label">
                        <label>Phone</label>
                        <div className="user-box">
                            <input type="text" name="phone" value={value.phone} onChange={onChange}  />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </div>
                    </div>
                    <div className="user-label">
                        <label>Date Of Birth</label>
                        <div className="user-box">
                            <input type="text" name="dateOfBirth" value={value.dateOfBirth} onChange={onChange}  />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </div>
                    </div>
                    <div className="user-label">
                        <label>Avatar</label>
                        <div className="user-box">
                            <input type="text" name="avatar" value={value.avatar} onChange={onChange}  />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </div>
                    </div>
                    <div className="user-label">
                        <label>Gmail</label>
                        <div className="user-box">
                            <input type="text" name="gmail" value={value.gmail} onChange={onChange}  />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UserChange;