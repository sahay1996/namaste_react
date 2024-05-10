/*
<div id="root">
    <div id="parent">
    <div id="children">
    <h1 id="heading1">This is Heading Tags</h1>
    <h2 id="heading2">This is Heading Tags</h2>
    </div>
    </div>
</div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading Tags"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "This is second Heading Tags"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
