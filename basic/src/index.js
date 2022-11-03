import React from "react";
import ReactDOM from "react-dom/client";

// import AppXy from "./AppXy";
import AppMentos from "./AppMentos";
import AppMentosImmer from "./AppMentosImmer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <AppXy /> */}
    <AppMentos />
    <AppMentosImmer />
  </>
);
