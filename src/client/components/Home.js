import React from "react";
const Home = () => {
  return (
    <div>
      {" "}
      <div>I am home Component</div>
      <button onClick={() => console.log("Click event is Fired")}>
        Press me
      </button>{" "}
    </div>
  );
};

export default Home;
