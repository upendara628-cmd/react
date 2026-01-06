import React, { useState, useEffect } from "react";

function StatesDemo() {
  let [video, setVideo] = useState("youtube");
  let [like, setlike] = useState(55);
  let [videocomment, setcomment] = useState("");

  // 1. Added [like] dependency so this runs when likes change
  useEffect(() => {
    console.log("likes updated");
  }, [like]);

  return (
    <>
      <h1>video</h1>
      <h2>name of the video : {video}</h2>
      <h3>like : {like}</h3>
      
      <button onClick={() => setlike(like + 1)}>like</button>
      <button onClick={() => setlike(like - 1)}>dislike</button>
      
      {like < 100 ? (
        <p>you are below 100 likes</p>
      ) : (
        <p><b>wow</b> people are liking your video</p>
      )}

      <hr />
      
      {/* video comment */}
      <form>
        <label>video comment: </label>
        {/* 2. onChange is now INSIDE the input tag */}
        <input
          type="text"
          name="video comment"
          value={videocomment}
          onChange={(e) => {
             // 3. Using setcomment (the setter), not videocomment
             setcomment(e.target.value);
             console.log(e.target.value);
          }}
        />
      </form>
      
      {/* Displaying what you type to prove it works */}
      <p>Comment preview: {videocomment}</p>
    </>
  );
}

export default StatesDemo;