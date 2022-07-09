import React from 'react';
import { useSelector } from 'react-redux';
import "./BoughtGameScreen.scss"
const BoughtGameScreen = () => {
    const ownGame = useSelector(state => state.games.ownGame)
    const render = ownGame.length === 0 ?
    (<div className="boughtgame-loading">
        <h3>NO GAME HAVE BEEN PUSCHASED</h3>
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
        return (<div className="boughtgame-each-game" key={index}>
            <div className="boughtgame-img"><img src={value.avatar} alt="game" /></div>
            <div className="boughtgame-content">
                <div><span>GAME</span> :{value.name}</div>
                <div><span>USER CREATE</span> :{value.user.name}</div>
                <div><span>PRICE</span> :{value.price}</div>
                <div><span>CATEGORY</span> :{value.category}</div>
            </div>
        </div>)
    }))
    return (
        <div className="boughtgame">
              <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="boughtgame-main">
                            <div className="title-general"><h2>PURCHASED GAME</h2></div>
                            <div className="boughtgame-list">
                                {render}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoughtGameScreen;