import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";
import TapDetail from "./Tap";

function App(){
  return(

    <React.Fragment>      
              <Header/> 
              <div class="test">

       <p>Welcome to The Tap Room!</p>
   
      
      

       <TapControl/>
  
       </div>
       </React.Fragment>


  );
}

export default App;