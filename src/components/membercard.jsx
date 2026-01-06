import React from "react";

function MemberName({name,div}){  
    console.log(name,div)

   return(
     <div> <h1>name : {name}</h1>
    <h2>divison : {div}</h2></div>
   )
}

export default MemberName;