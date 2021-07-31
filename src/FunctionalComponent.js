import React from "react";

const stateInitializer = () => {console.log("State Initializer used only when mounting done,lazy initializer")}
function CustomerComponent() {
  const [customer, setCustomer] = React.useState("Guest");
  const [age, setAge] = React.useState(20);
  const [state,setState] = React.useState(stateInitializer);
  const updateHandler = () => {
    setCustomer("Fareha Sameet");
    setAge(27);
  };
  
return<div>
            <h1>Functional Component using State</h1>
            <h3>Name:{customer}</h3>
            <h3>Age:{age}</h3>
            <h3>Age:{state}</h3>
            <button onClick={updateHandler}>
                Update Customer
            </button>
        </div>
}
export default CustomerComponent;
