import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { fetchAsyncDeleteUser } from 'store/slices/gameSlice';
import "./ProfileLayout.scss"
import { toast } from 'react-toastify';
import { useState } from 'react';
const ProfileLayout = (props) => {
    const { children } = props;
    const dispatch = useDispatch();
    const history = useHistory()
    const [conditionBackground, serConditionBackground]= useState(true)
    let count=0
    const { idUser, account,avatar } = useSelector(state => state.games.userLogin)
    const backgroundHandle = () => {
        serConditionBackground(!conditionBackground)
    }
    const deleteUserHandle = () => {
        count++
        if(count>0){
            const condition =window.confirm("Are you sure you want to delete your account?")
            if(condition){
                dispatch(fetchAsyncDeleteUser(idUser));
                count=0
                toast('Deleted account!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    });
                history.push("/login")
            }
            else{
                return
            }
        }
    }
    return (
        <>
            <Header />
            <div className="user-layout">
            <h2><p><img src={avatar} alt="avatar"/></p>{account}'S ACCOUNT</h2>
                <div className="user-layout-box">
                    <div className="user-layout-side">
                        <ul>
                            <Link to={`/user/${idUser}`} onClick={backgroundHandle} className={conditionBackground?"background__hidden":""}>USER INFORMATION</Link>
                            <Link to={`/user/${idUser}/change`} onClick={backgroundHandle} className={conditionBackground?"":"background__hidden"}>CHANGE INFORMATION</Link>
                            <div className="user-layout-side__delete" onClick={deleteUserHandle}>DELETE USER</div>
                        </ul>
                    </div>
                    <div className="user-layout-content">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfileLayout;