import React from "react";
import ReactDOM from "react-dom/client";

// Creating element using core React
let rootList = ReactDOM.createRoot(document.getElementById("rootList"));
// let list = React.createElement("ul", {id : "my_list"} , 
// [React.createElement("li" , {} , "Home")],
// [React.createElement("li" , {} , "Courses")],
// [React.createElement("li" , {} , "Catalogue")],
// [React.createElement("li" , {} , "Products")])

// rootList.render(list);

// creating element using jsx
const listing = (<li>Home</li>)

rootList.render(listing);

const root = ReactDOM.createRoot(document.getElementById("root"));

let Paragrapgh = () => (
    <p>
        Functinal Component are normal function expression that returns a piece of jsx
    </p>
)

let Heading = () => { 
    // return <div id = "Container">
      return  <h1>This is functional component</h1> 
       {Paragrapgh}
    // </div>
}

root.render(<Heading/>)


