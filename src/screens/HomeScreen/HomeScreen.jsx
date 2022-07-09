import React from 'react';
import steam from 'assets/img/steamcards.png';
import { Link } from 'react-router-dom';
import GameList from 'screens/HomeScreen/components/GameList/GameList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import "./HomeScreen.scss";
import { fetchAsyncInforGame } from 'store/slices/gameSlice';
import videoHome from 'assets/img/vd.mp4';
import Images from 'constants/images';
import Slider from "react-slick";
import { useHistory } from 'react-router';
import { Setting1 } from 'common/setting1';
import { Setting2 } from 'common/setting2';
import { toast } from 'react-toastify';

const HomeScreen = () => {
  const allGame = useSelector(state => state.games.cart)
  const user = useSelector(state => state.games.userLogin)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncInforGame())
  }, [dispatch])
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
    <div className="home">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay loop muted>
          <source src={videoHome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-container__right home-nav__home">
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
      <div className="home-container">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="home-container-sidebar">
                <div className="home-container-sidebar__logo">
                  <img src={steam} alt="steam" />
                  <div className="home-container-sidebar__block" >
                    <div className="title-general_secondary" >
                      <h2>GIFT CARDS</h2>
                    </div>
                    <p>Now Available On Steam</p>
                  </div>
                  <div className="home-container-sidebar__block" >
                    <div className="title-general_secondary" >
                      <h2>RECOMMENDED</h2>
                    </div>
                    <ul>
                      <li>By Friends</li>
                      <li>By curators</li>
                      <li>Tag</li>
                    </ul>
                  </div>
                  <div className="home-container-sidebar__block" >
                    <div className="title-general_secondary" >
                      <h2>DISCOVERY QUEUES</h2>
                    </div>
                    <ul>
                      <li>Recommendations</li>
                      <li>New Releases</li>
                    </ul>
                  </div>
                  <div className="home-container-sidebar__block" >
                    <div className="title-general_secondary" >
                      <h2>BROWSE CATEGORIES</h2>
                    </div>
                    <ul>
                      <li>Top Sellers</li>
                      <li>New Releases</li>
                      <li>Upcoming</li>
                      <li>sepecials</li>
                      <li>Virtual Reality</li>
                      <li>Controlled Friendly</li>
                    </ul>
                  </div>
                  <div className="home-container-sidebar__block" >
                    <div className="title-general_secondary" >
                      <h2>BROWSE BY GENRE</h2>
                    </div>
                    <ul>
                      <li>Free to Play</li>
                      <li>Early Access</li>
                      <li>Action</li>
                      <li>Adventure</li>
                      <li>Casual</li>
                      <li>Indie</li>
                      <li>Massively Multiplayer</li>
                      <li>Racing</li>
                      <li>RPG</li>
                      <li>Simulation</li>
                      <li>Sports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="home-container__section">
                <div className="home-trending">
                  <div className="title-general_secondary home-trending__title" >
                    <h2>TRENDING</h2>
                  </div>
                  <Slider {...Setting1}>
                    <div><img src={Images.bg1} alt="game"></img></div>
                    <div><img src={Images.bg2} alt="game"></img></div>
                    <div><img src={Images.bg3} alt="game"></img></div>
                    <div><img src={Images.bg4} alt="game"></img></div>
                    <div><img src={Images.bg5} alt="game"></img></div>
                    <div><img src={Images.bg6} alt="game"></img></div>
                    <div><img src={Images.bg7} alt="game"></img></div>
                  </Slider>
                </div>
                <div className="home-popular">
                  <div className="title-general_secondary home-trending__title" >
                    <h2>POPULAR GAME</h2>
                  </div>
                  <Slider {...Setting2}>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        <div>
                          <img src={Images.bg1} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        <div>
                          <img src={Images.bg2} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        <div>
                          <img src={Images.bg3} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        {/* <div className="home-popular-eachgame__side-box">
                          NO INFORMATION
                        </div> */}
                        <div>
                          <img src={Images.bg4} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        {/* <div className="home-popular-eachgame__side-box">
                          NO INFORMATION
                        </div> */}
                        <div>
                          <img src={Images.bg5} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        {/* <div className="home-popular-eachgame__side-box">
                          NO INFORMATION
                        </div> */}
                        <div>
                          <img src={Images.bg6} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="home-popular-eachgame">
                      <div className="home-popular-eachgame__box">
                        {/* <div className="home-popular-eachgame__side-box">
                          NO INFORMATION
                        </div> */}
                        <div>
                          <img src={Images.bg7} alt="game"></img>
                        </div>
                        <div className="home-popular-eachgame__content">
                          <p>WEEKEND DEAL</p>
                          <p>Offer ends 26 Oct @ 12:00am.</p>
                          <p>
                            <span className="button-shine home-popular-eachgame__button">
                              <button>Up to 90%</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-game">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <div className="title-general_secondary" >
                <h2>CATEGORY</h2>
              </div>
              <div className="home-game-list">
                <GameList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;