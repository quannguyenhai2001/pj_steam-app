import React from 'react';
import "./Header.scss";
import logo from 'assets/img/logo.png'
import videoAbout from 'assets/img/about.mp4';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Clear, RemoveInforUser } from 'store/slices/gameSlice';
const Header = () => {
    const user = useSelector(state => state.games.userLogin)
    const dispatch = useDispatch()
    const [conditionLogin, setConditionLogin] = useState(false)
    const [conditionAbout, setConditionAbout] = useState(false)

    const loginHandle = () => {
        setConditionLogin(!conditionLogin)
    }
    const aboutHandle = () => {
        setConditionAbout(!conditionAbout)
    }
    const logoutHandle = () => {
        dispatch(RemoveInforUser())
        dispatch(Clear())
    }
    return (
        <div className="header">
            {conditionAbout ? (<div className="pop-up">
                <i class="fas fa-times" onClick={aboutHandle}></i>
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay loop muted>
                        <source src={videoAbout} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="pop-up-content">
                    <h2>STEAM</h2>
                    <p>Steam is the ultimate destination for playing, discussing, and creating games.</p>
                    <div className="pop-up-content-player">
                        <div className="pop-up-content-player__online">
                            <div><i class="fas fa-circle"></i>ONLINE</div>
                            <p>17,588,294</p>
                        </div>
                        <div className="pop-up-content-player__playing">
                            <div><i class="fas fa-circle"></i>PLAYING NOW</div>
                            <p>3,785,323</p>
                        </div>
                    </div>
                    <h2>Join the Community</h2>
                    <p>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                    <p className="pop-up-content-link">Visit the Community<i class="fas fa-arrow-right"></i></p>
                    <h2>Experience Steam Hardware</h2>
                    <p>We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.</p>
                    <p className="pop-up-content-link">Experience Steam Hardware<i class="fas fa-arrow-right"></i></p>
                    <h2>Release your Game</h2>
                    <p>Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.</p>
                    <p className="pop-up-content-link">Learn about Steamworks<i class="fas fa-arrow-right"></i></p>
                </div>
            </div>) :
                (<></>)}
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link to="/">
                            <div className="header-logo">
                                <div className="header-logo__img">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h1>STEAM</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <div className="header-nav">
                            <nav>
                                <ul>
                                    <li className="nav-primary">STORE
                                        <ul className="nav-secondary">
                                            <li>Home</li>
                                            <li>Discovery</li>
                                            <li>Wishlist</li>
                                            <li>News</li>
                                        </ul>
                                    </li>
                                    <li className="nav-primary">COMMUNITY
                                        <ul className="nav-secondary">
                                            <li>Discussions</li>
                                            <li>Workshops</li>
                                        </ul>
                                    </li>
                                    <li className="nav-primary" onClick={aboutHandle}>ABOUT
                                    </li>
                                    <li className="nav-primary">SUPPORT
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="header-right">
                            <div className="button-shine">
                                <button className="header-right__install"><i className="fas fa-download"></i>install steam</button>
                            </div>
                            {Object.keys(user).length === 0 ?
                                (<Link to="/login"><div>Login</div></Link>) :
                                (<div className="header-login" onClick={loginHandle}>
                                    <div className="header-login__img">
                                        <img src={user.avatar} alt="logo" />
                                    </div>
                                    <div className="header-login__content">
                                        {user.name}<i className="fas fa-sort-down"></i>
                                        <nav className={conditionLogin ? ("header-login__block") : ("header-login__none")}>
                                            <ul>
                                                <Link to={`/user/${user.idUser}`}><li>ACCOUNT DETAIL</li></Link>
                                                <Link to="/login"><li onClick={logoutHandle}>LOG OUT</li></Link>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>)}
                            <button className="header-button__message"><i className="fas fa-envelope"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
