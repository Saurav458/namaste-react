{
  /* <div id="parent">
    <div id="child">
        <h1>I am a h1</h1>
        <h1>I am a h2</h1>
    </div>
    <div id="child2">
        <h1>I am a h1</h1>
        <h1>I am a h2</h1>
    </div>
</div> */
}

// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from javascript")

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const parent = React.createElement("div", { id: "parent" }, [  // core of react 
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1"),
    React.createElement("h2", {}, "I am a h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1"),
    React.createElement("h2", {}, "I am a h2"),
  ]),
]);

console.log(parent) //object
const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent)  