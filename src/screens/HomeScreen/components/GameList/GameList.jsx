import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./GameList.scss"
const GameList = () => {
    const games = useSelector(state => state.games.games)
    const mapping = (games.length) === 0 ? (<div>LOADING GAMES...</div>) :
        (games.map((value, index) => {
            return (
                <Link to={`/gamedetail/${value.idGame}`} key={index}>
                    <div className="home-game-card" >
                        <div className="home-game-card__img">
                            <img src={value.avatar} alt="game" />
                        </div>
                        <div className="home-card__content">
                            <div>{value.name}</div>
                            <div><i className="fab fa-windows"></i></div>
                            <div>{value.category}</div>
                        </div>
                        <div className="home-card__price">
                             <span>{value.price}</span> 
                        </div>
                        <div className="home-game-card-side" >
                           <h2>{value.name}</h2>
                           <div>  <img src={value.avatar} alt="game" /></div>
                           <p>{value.description}</p>
                        </div>
                    </div>
                </Link>)
        }))
    return (
        <>
            {mapping}
        </>
    );
};

export default GameList;