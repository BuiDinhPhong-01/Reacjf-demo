import React from "react"
function Team1() {
    return (
        <>
        <div id="text-center6">
      <h1>OUR TEAM</h1>
      <hr className="we" />
      <div id="text-center6-img">
       <img className="jpg" src={require("../src/assets/images/team1.jpg")}  />
       <img className="jpg" src={require("../src/assets/images/team2.jpg")}  />
       <img className="jpg" src={require("../src/assets/images/team3.jpg")}  />
    </div>
    </div>
        </>
    )
}

export default Team1