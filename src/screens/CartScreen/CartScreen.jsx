
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BuyGame, RemoveGames } from 'store/slices/gameSlice';
import "./CartScreen.scss"

const CartScreen = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.games.cart)
    const buyHanleButton = (values) => {
        let index = state.indexOf(values)
        dispatch(BuyGame(values))
        dispatch(RemoveGames(index))
    }
    const removeHanleButton = (values) => {
        let index = state.indexOf(values)
        dispatch(RemoveGames(index))
    }
    const render = state.length === 0 ?
        (<div className="cart-loading">
            <h3>THERE ARE NO GAMES IN CART</h3>
            <div className="cart-loading-animation">
            <div className="cart-loading-animation__load">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>) :
        (state.map((value, index) => {
            return (<div className="cart-each-game" key={index}>
                <div className="cart-img"><img src={value.avatar} alt="game" /></div>
                <div className="cart-content">
                    <div><span>GAME</span> :{value.name}</div>
                    <div><span>USER CREATE</span> :{value.user.name}</div>
                    <div><span>PRICE</span> :{value.price}</div>
                    <div><span>CATEGORY</span> :{value.category}</div>
                </div>
                <div className="cart-button">
                    <button onClick={() => buyHanleButton(value)}>Buy Game</button>
                    <button onClick={() => removeHanleButton(value)}>Remove Game</button>
                </div>
            </div>)
        }))
    return (
        <div className="cart">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-main">
                            <div className="title-general"><h2>CART</h2></div>
                            <div className="cart-list">
                                {render}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;