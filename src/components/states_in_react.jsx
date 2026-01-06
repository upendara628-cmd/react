import React from "react";
// import use stage 
import { useState } from "react";
function StatesDemo(){
    let [video , setVideo] = useState("youtube")
    let [like , setlike] = useState(55)
    return(
        <>
        <h1>video</h1>
        <h2>nmae of the video :{video}</h2>
        <h3>like :{like}</h3>
        <button onClick={() =>(setlike(like+1))}>like</button>
        </>
    )
}


export default StatesDemo;