import react from "react";

import reactDOM from "react-dom";

import "./style.css"

import App from "./App"
 
reactDOM.render(
    <react.StrictMode>
        <App/>
    </react.StrictMode>,
    document.getElementById("root")
)  





// reactDOM.render(
//     <react.useStrict>
//         <App/>
//     </react.useStrict>,
//     document.getElementById("root")
// )