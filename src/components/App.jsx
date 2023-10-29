import React from "react";
import "../styles.css";


function App(){

   

    return (
        <div className="box">
             <h1 className="hello">Hello</h1>
             <h1>Welcome!</h1>
             <h2 className="hello">Sign in</h2>

             <div className="type">
             <input placeholder="Name"></input>
             <input id="input2" placeholder="Password" type="password"></input>
             <button className="button">Continue</button>
             </div>

        </div>
        
    )
};

export default App;

