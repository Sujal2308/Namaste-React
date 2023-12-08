import React from "react";
import ReactDOM from "react-dom/client";

let rootList = ReactDOM.createRoot(document.getElementById("rootList"));
let list = React.createElement("ul", {id : "my_list"} , 
[React.createElement("li" , {} , "Home")],
[React.createElement("li" , {} , "Courses")],
[React.createElement("li" , {} , "Catalogue")],
[React.createElement("li" , {} , "Products")])

rootList.render(list);
