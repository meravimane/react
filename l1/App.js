
// const root = document.getElementById("root");
// const h1Tag = document.createElement("h1");
// h1Tag.innerHTML = "hello form JS";
// root.appendChild(h1Tag)

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