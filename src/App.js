import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt a Pet!"),
    React.createElement(Pet, {
      name: "Doggie",
      animal: "Dog",
      breed: "Poodle",
    }),
    React.createElement(Pet, {
      name: "Kitsy",
      animal: "Cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, { name: "Fufy", animal: "Dog", breed: "Mix" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
