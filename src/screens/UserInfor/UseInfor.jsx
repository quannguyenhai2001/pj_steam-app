
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import "./UserInfor.scss";

const UserInfor = () => {
    const state = useSelector(state => state.games.userLogin)
    const param = useParams()
    console.log(param)
    return (
        <div className="user-infor">
            <div class="user-infor__side user-infor__side--front">
            <div className="user-container">
                <div><span>NAME </span>: {state.name}</div>
                <div><span>PASSWORD </span>: ************</div>
                <div><span>PHONE </span>: {state.phone}</div>
                <div><span>DATE OF BIRTH </span>: {state.dateOfBirth}</div>
                <div><span>GMAIL </span>: {state.gmail}</div>
                <div><span>ROLE </span>: {state.role}</div>
            </div>
            </div>
            <div class="user-infor__side user-infor__side--back">
                <div>
                    <img src={state.avatar} alt="avatar"></img>
                </div>
            </div>
        </div>
    );
};

export default UserInfor;