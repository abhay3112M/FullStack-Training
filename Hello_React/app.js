//const component = React.createElement("h3",null,"Hello, React is Working Fine!");

/*const component = React.createElement("a",{
        href:"/",
        style:{
            textDecoration:"none",
            textTransform:"uppercase"
        },
        className:"nav"
    },"Home");
*/

const component = React.createElement("div",{className:"header"},
    React.createElement("h1",{},"ReactWeb"),
    React.createElement("p",{className:"slogan"},"Welcome to React")
);

const placeholder = document.getElementById("placeholder");
ReactDOM.render(component, placeholder);
