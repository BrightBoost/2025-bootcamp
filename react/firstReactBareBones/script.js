const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

// create child components
let elements = [];
const header = React.createElement("h1", {}, "Welcome");
elements.push(header);

const divComponent = React.createElement("div", {}, "Blabla React!", elements);
root.render(divComponent);
