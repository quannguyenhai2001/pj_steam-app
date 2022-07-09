import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Footer.scss"
const Footer = () => {
  const state= useSelector(state => state.games.userLogin);
    return (
        <div>
        {Object.keys(state).length === 0 ?
        ( <div className="footer" style={{marginTop: '0px'}}>
          <h3>Looking for Recommendations ?</h3>
          <p>Sign to view personalized Recommendations</p>
          <Link to="/login"><button>Sign in</button></Link>
          <p>
            Or <span><Link to="/register">sign up</Link></span> and join Steam for free
          </p>
        </div>): (<></>)}
       
        <div className="under_footer" />
        </div>
    );
};

export default Footer;