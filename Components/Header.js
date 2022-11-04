import React from "react";

 function Header(){
  const content = ['HOME','ABOUT','SERVICES','TEAM','PORTFOLIO','BLOG','CONTACT'];
  return (
  <div id="Header">
      <div className="HEader">
          <a href="#"><img className="logo" src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"/></a>
          <button className="btn">Buy now</button>
      </div>
      <div className="HEAder">
          <a href="#"><img src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png"/></a>
          <div className="navbar-collapse">
              <ul className="navbar-nav">
                 {content.map((item,index) => 
                   (<li className="nav-item" key={index}>
                  <a className="nav-link" href={'#' + item.toLowerCase()}>{item}</a>
              </li>)
                 )}
              </ul>
          </div>
      </div>
  </div>
);   
}
export default Header
