import React from "react";
const Home = () => {
  return (
    <div>
      {" "}
      <div>Initial home Component</div>
      <button onClick={() => console.log("Click event is Fired")}>
        Press me
      </button>{" "}
    </div>
  );
};

export default {
  component: Home
}
