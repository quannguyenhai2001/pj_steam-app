import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import "./GameDetailScreen.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addCart, addFavorite, DeleteCommentEachGame, DeleteSelectGame, fetchAsyncComment, fetchAsyncCreateComment, fetchAsyncSelectGame } from 'store/slices/gameSlice';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import CommentList from './components/CommentList/CommentList';
import { useState } from 'react';
const GameDetailScreen = () => {
  const [valueComment, setValueComment] = useState({
    content: ""
  })
  const dispatch = useDispatch()
  const param = useParams()
  const allGame = useSelector(state => state.games.cart)
  const state = useSelector(state => state.games.selectGame)
  const ownGame = useSelector(state => state.games.ownGame)
  const user = useSelector(state => state.games.userLogin)
  const favoriteGame = useSelector(state => state.games.favoriteGame)
  const currentComment = useSelector(state => state.games.commentCurrent)
  const editComment = useSelector(state => state.games.editComment)
  const [conditionComment, SetConditionComment] = useState(false)

  const history = useHistory()
  useEffect(() => {
    dispatch(fetchAsyncSelectGame(param.idGame))
    return () => {
      dispatch(DeleteSelectGame())
    }
  }, [dispatch, param.idGame])
  useEffect(() => {
    dispatch(fetchAsyncComment(state.idGame))
    return () => {
      dispatch(DeleteCommentEachGame())
    }
  }, [dispatch, state.idGame, currentComment,editComment])
  const clickAddToCart = () => {
    const compare = (value) => {
      return JSON.stringify(value) === JSON.stringify(state)
    }
    if (Object.keys(user).length === 0) {
      toast.warn('Not logged in!', {
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
      if (allGame.some(compare)) {
        toast.error('This game existed in cart', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (ownGame.some(compare)) {
        toast.error('This game is boughted', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else {
        const action = addCart(state)
        dispatch(action)
      }
    }
  }
  const clickAddToFavorite= () => {
    const compare = (value) => {
      return JSON.stringify(value) === JSON.stringify(state)
    }
    if (Object.keys(user).length === 0) {
      toast.warn('Not logged in!', {
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
      if (favoriteGame.some(compare)) {
        toast.error('This game existed in favorite', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else {
        const action = addFavorite(state)
        dispatch(action)
      }
    }
  }
  const submitCommemtHandle = (e) => {
    e.preventDefault()
    if (valueComment.content) {
      dispatch(fetchAsyncCreateComment({
        idGame: state.idGame,
        idUser: user.idUser,
        createdComment: valueComment
      }))
      setValueComment({ content: "" })
    }
    else {
      toast.warn('null value', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  const onChangeComment = (e) => {
    const target = e.target
    setValueComment({ ...valueComment, content: target.value })
  }
  const commentClickHandle = () => {
    SetConditionComment(true)
  }
  const commentBlurHandle = () => {
    SetConditionComment(false)
  
  }


  const clickCreateGameHandle = () => {
    if (Object.keys(user).length === 0) {
      toast.warn('Not logged in!', {
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
      history.push("/creategame")
    }
  }
  const clickBoughtGameHandle = () => {
    if (Object.keys(user).length === 0) {
      toast.warn('Not logged in!', {
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
      history.push("/boughtgame")
    }
  }
  const clickGameCreationHandle = () => {
    if (Object.keys(user).length === 0) {
      toast.warn('Not logged in!', {
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
      history.push("/gameusercreate")
    }
  }
  const clickFavoriteGameHandle = () => {
    if (Object.keys(user).length === 0) {
      toast.warn('Not logged in!', {
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
      history.push("/favoritegame")
    }
  }
  
  return (
    <div className="game-detail">
      <div className="container">
        <div className="game-detail__nav">
          <div className="home-container__right">
            <nav>
              <ul>
                <li className="nav-primary">My Game
                  <ul className="nav-secondary">
                    <li onClick={clickBoughtGameHandle}>Bought Game</li>
                    <li onClick={clickGameCreationHandle}>Game Creation</li>
                  </ul>
                </li>

                <li className="nav-primary" onClick={clickCreateGameHandle}>Creative Game
                </li>
                <li className="nav-primary" onClick={clickFavoriteGameHandle}>Favorite
                </li>
                <Link to="/cart">
                  <li className="nav-primary nav-cart">Cart
                    {allGame.length === 0 || Object.keys(user).length === 0 ? (<></>) : (<div className="cart-cout">{allGame.length}</div>)}
                  </li>
                </Link>
                <li className="nav-input">
                  <div>
                    <input type="text" placeholder="Search" id="search" />
                    <span></span>
                  </div>
                  <label htmlFor="search">
                    <i className="fas fa-search"></i>
                  </label>
                </li>

              </ul>

            </nav>
          </div>
        </div>
        <h2 className="game-detail__title">{state.name}</h2>
        {Object.keys(state).length === 0 ? (<div>Loading...</div>)
          : (
            <>
              <div className="row">
                <div className="col-7">
                  <div className="detail-logo"><img src={state.avatar} alt="game"></img></div>
                </div>
                <div className="col-5">
                  <div className="detail-text">
                    <div className="detail-img">
                      <img src={`${state.avatar}`} alt="game"></img>
                    </div>
                    <div className="detail-text__content">
                      <div className="detail-middle">
                        <p>{state.description} </p>
                        <div><span>User create :</span>{state.user.name}</div>
                        <div><span>Price: </span>{state.price}</div>
                        <div><span>Date: </span>{state.date}</div>
                        <div><span>Link: </span>{state.link}</div>
                      </div>
                      <div className="detail-tag">
                        <p>Tag game:</p>
                        <button>{state.category}</button>
                      </div>
                    </div>
                    <div className="detail-buy">
                      <button onClick={clickAddToCart}>ADD TO CARD</button>
                      <button onClick={clickAddToFavorite}>FAVORITE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="game-detail-input">
                <form className="game-detail-form" autoComplete="off" onSubmit={submitCommemtHandle}>
                  <div className="game-detail-create-comment">
                    <div className="game-detail-avatar">
                      <img src={user.avatar} alt="avatar" />
                    </div>
                    <div>
                      <input onClick={commentClickHandle} type="text" name="content" value={valueComment.content} onChange={onChangeComment} placeholder="Comment..." />
                      <span></span>
                    </div>
                    <div className="game-detail-btn-comment button-bubble">
                      <button className={conditionComment ? "block" : "none"}
                        onClick={commentBlurHandle}>Bình luận</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="game-detail-comment"><CommentList idGame={state.idGame} /></div>
            </>
          )}

      </div>
    </div>
  );
};

export default GameDetailScreen;