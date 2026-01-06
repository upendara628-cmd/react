import React from "react";
import { data, myclassmembers } from "../assets/data/data";
function Myclass() {
  

  return (

    <ul>
      {
        myclassmembers.map(person => {

          return (<li>{person}</li>)
        })
      }
    </ul>
  );
  
}

export default Myclass;