import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";

function App(){
  return(
    <React.Fragment>
      <Header/>
      <p>Welcome to The Tap Room!</p>
      <TapControl/>
      </React.Fragment>
  );
}

export default App;