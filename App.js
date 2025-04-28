import React from "react";
import ReactDOM from "react-dom/client";
// const header = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am h1"),
//     React.createElement("h2", {}, "I am h2"),
//   ]),

//   React.createElement("div", { id: "child2" }, [
//     React.createElement([
//       React.createElement("h1", {}, "I am h1"),
//       React.createElement("h2", {}, "I am h2"),
//     ]),
//   ]),
// ]);
const header = React.createElement("div", { id: "parent" }, "I am h1");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
