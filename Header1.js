import React from 'react';
import './App.css'
function Header1() {
  return (
    <>
      <div className='envo'>
        <img
        src={require("../src/assets/images/anh.png")}/>
        
        <p className='By'>By now</p>
        </div>
   <div className='crucio'> <img
            src={require("../src/assets/images/anh1.png")}  />
 
          </div>
        </>
);
  }

export default Header1;
