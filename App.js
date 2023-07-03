// <div id ="parent">
//     <div id="child">
//       <h1>I'm h1 tag </h1>
//       <h2>I'm h2 tag</h2>
//     </div>
//     <div id="child2">
//       <h1>I'm h1 tag </h1>
//       <h2>I'm h2 tag</h2>
//     </div>
// </div>
// ReactElement return object => HTML (Browser Render)
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", "", "Hi I'm h1 tag"),
      React.createElement("h2", "", "Hi I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", "", "Hi I'm h1 tag"),
      React.createElement("h2", "", "Hi I'm h2 tag"),
    ])
  ]
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, // take object 
  "Hello World from React!"
);

console.log(parent); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));
const headingroot = ReactDOM.createRoot(document.getElementById("header"));
headingroot.render(heading);
root.render(parent);
