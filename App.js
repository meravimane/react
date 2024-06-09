import React from "react";
import ReactDOM from "react-dom";

const parent = [React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child" }, 
    [React.createElement('h1', { id: "heading", key: 1}, "I'm  h1 "), React.createElement('h2', { id: "heading", key:2 }, "I'm  h2 ")]
    )
),
React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child" }, 
    [React.createElement('h1', { id: "heading", key: 1}, "I'm  h1 "), React.createElement('h2', { id: "heading", key:2 }, "I'm  h2 ")]
    )
)
];


const heading = React.createElement("h1", { id: "heading" }, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([parent, heading]);
// root.render(heading);