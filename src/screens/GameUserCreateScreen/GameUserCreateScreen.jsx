import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncDeleteGameCreation, fetchAsyncInforGameCreation, RemoveGamesCreation } from 'store/slices/gameSlice';
import "./GameUserCreateScreen.scss"
const GameUserCreateScreen = () => {
    const dispatch = useDispatch()
    const ownGame = useSelector(state => state.games.ownGameCreation)


    const user = useSelector(state => state.games.userLogin)
    useEffect(() => { 
        dispatch(fetchAsyncInforGameCreation(user.idUser)) 
    }, [dispatch, user.idUser])
    const handleDeleteGameCreation = (e) => {
        dispatch(fetchAsyncDeleteGameCreation({
            idUser: user.idUser,
            idGame: e.idGame
        }))
        const index = ownGame.indexOf(e)
        dispatch(RemoveGamesCreation(index))
    }
    const render = ownGame.length === 0 ?
        (<div className="gamecreation-loading">
            <h3>YOU HAVEN'T CREATED ANY GAMES YET</h3>
            <div className="boughtgame-loading-animation">
                <div className="boughtgame-loading-animation__load">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>) :
        (ownGame.map((value, index) => {
            return (<div className="gamecreation-each-game" key={index}>
                <div className="gamecreation-each-game__side gamecreation-each-game__side--front">
                    <div className="gamecreation-each-game-img"><img src={value.avatar} alt="game" /></div>
                    <div className="gamecreation-each-game-content">
                        <div><span>GAME</span> :{value.name}</div>
                        <div><span>PRICE</span> :{value.price}</div>
                        <div><span>DATE</span> :{value.date}</div>
                        <div className="Special"><div>LINK</div> <p>:{value.link}</p></div>
                        <div><span>CATEGORY</span> :{value.category}</div>
                    </div>
                </div>
                <div className="gamecreation-each-game__side gamecreation-each-game__side--back">
                    <div className="button-bubble">
                        <Link to={`/editgame/${value.idGame}`} ><button>EDIT</button></Link>
                    </div>
                    <div className="button-bubble">
                        <button onClick={() => handleDeleteGameCreation(value)}>DELETE</button>
                    </div>
                </div>
            </div>)
        }))



    return (
        <div className="gamecreation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="gamecreation-main">
                            <div className="title-general"><h2>GAME CREATION</h2></div>
                            <div className="gamecreation-list">
                                {render}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameUserCreateScreen;