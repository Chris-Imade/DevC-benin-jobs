import React from 'react';
import './Header.css';

function Header() {
const styleColorBtn = {
  mouseEffect:{
    cursor: "pointer"
  }
}
    return (
        <div className="header">
          <div className="header__left">

            <div className="header__left--top">
             <h6 style={styleColorBtn.mouseEffect}>Fbweb Project</h6>
            </div>

           <div className="header__left--middle">
             <h4>Get gigs and jobs<br /> Hire Talents.</h4>
             <button style={styleColorBtn.mouseEffect} >Get Started</button>
           </div>

          </div>

            <div className="header__middle">
                <div className="header__middle--middle1"></div>
                <div className="header__middle--middle2"></div>
                <div className="header__middle--middle3"></div>
                <div className="header__middle--middle4"></div>
                <div className="header__middle--middle5"></div>
                <div className="header__middle--middle6"></div>
                <div className="header__middle--middle7"></div>
                <div className="header__middle--middle8"></div>
                <div className="header__middle--middle9"></div>
                <div className="header__middle--middle10"></div>
            </div>

          <div className="header__right">
           <div className="header__right--floatTop">
                {/* couple of after and before moving aroud */}
           </div>

           <div className="header__right--floatBottom">
               {/* couple of after and before moving aroud */}
           </div>
          </div>
        </div>
    )
}

export default Header
