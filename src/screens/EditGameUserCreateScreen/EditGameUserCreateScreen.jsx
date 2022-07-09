import React from 'react';
import "./EditGameUserCreateScreen.scss";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchAsyncEditGameCreation } from 'store/slices/gameSlice';
const EditGameUserCreateScreen = () => {
    const history = useHistory()
    const param = useParams()
    console.log("param=", param )
    const user = useSelector(state => state.games.userLogin)
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        name: "",
        price: "",
        date: "",
        description: "",
        avatar: "",
        category: "",
        link: ""
    })
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(fetchAsyncEditGameCreation({
            idUser: user.idUser,
            idGame: param.id,
            valueEdit:value
        }))
        history.push("/")
    }
    const onChange = (e) => {
        const target = e.target
        setValue({ ...value, [target.name]: e.target.value })
    }
    return (
        <div className="create-game">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="create-game-form">
                            <form onSubmit={onSubmit} autoComplete="off">
                                <div className="title-general"><h2>EDIT GAME</h2></div>
                                <div className="user-label">
                                    <label>NAME</label>
                                    <div className="user-box">
                                        <input type="text" name="name" value={value.name} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>PRICE</label>
                                    <div className="user-box">
                                        <input type="text" name="price" value={value.price} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>DATE</label>
                                    <div className="user-box">
                                        <input type="text" name="date" value={value.date} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>DESCRIPTION</label>
                                    <div className="user-box">
                                        <input type="text" name="description" value={value.description} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>AVATAR</label>
                                    <div className="user-box">
                                        <input type="text" name="avatar" value={value.avatar} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>CATEGORY</label>
                                    <div className="user-box">
                                        <input type="text" name="category" value={value.category} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="user-label">
                                    <label>LINK</label>
                                    <div className="user-box">
                                        <input type="text" name="link" value={value.link} onChange={onChange} />
                                        <span className="bottom"></span>
                                        <span className="right"></span>
                                        <span className="top"></span>
                                        <span className="left"></span>
                                    </div>
                                </div>
                                <div className="button-bubble"><button>SUBMIT</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGameUserCreateScreen;