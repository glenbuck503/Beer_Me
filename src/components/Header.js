import React from "react";
import tapsImage from "./../img/suds.gif"

function Header() {
  return (
    <React.Fragment>
      <h1>Tap Room</h1>
      <img src={tapsImage} id="beerPic" />
   
      
      </React.Fragment>
  );
}

export default Header;