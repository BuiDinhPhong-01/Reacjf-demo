import React from "react"
function Portfolio() {
    return (
        <>
        <div id="text-center8">
      <div id="text-center8-nav1">
        <h1>OUR PORTFOLIO</h1>
        <hr className="we" />
        <div id="text-center8-contona">
          <a href="">All </a>
          <a href="">Graphic Design </a>
          <a href="">Web Design </a>
          <a href="">Web Development </a>
        </div>
      </div>
      <div id="text-center8-nav2"> 
      <img className="jpg1" src={require("../src/assets/images/work1.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work2.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work3.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work4.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work5.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work6.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work7.jpg")}  />
      <img className="jpg1" src={require("../src/assets/images/work8.jpg")}  /> 
</div>
</div>
 <div id="text-center8-nav3">
        <button id="bth-center8-nav3">Load more</button>
      </div>

        </>
    )
}

export default Portfolio