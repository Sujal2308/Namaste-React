let root = ReactDOM.createRoot(document.getElementById("root"));

let heading = React.createElement("div" , {id : "parent"} , 
[React.createElement("h1" , {} , "Heading 1")],
[React.createElement("h3" , {} , "Heading 2")]);

/* Note :- root and heading are react elements which are objects at the end of the day*/
root.render(heading);


let rootList = ReactDOM.createRoot(document.getElementById("rootList"));
let list = React.createElement("ul", {id : "my_list"} , 
[React.createElement("li" , {} , "Home")],
[React.createElement("li" , {} , "Courses")],
[React.createElement("li" , {} , "Catalogue")],
[React.createElement("li" , {} , "Products")]
)


rootList.render(list);
// rootList.render(list)