import Sub from './Components/Sub.jsx';
import './App.css';
import Student from './Components/Student.jsx';
import { useState } from "react";
function App() {
  const Name = "Dinesh";
  const [count, setCount] = useState(0);

  const Sum = () => {
    return (
      <>
        <h1>Arrow Function Component Sum</h1>
        <div>Sum is: {100 + 200}</div>
      </>
    );
  };

  return (
    <>
      <h2>This is the React Function Component App Example</h2>

      <h2>Myself</h2>
      <h2>{Name}</h2>

      <Sum />
      <Sub />
      <hr/>
<h2>useState Example</h2>
<h3>Count: {count}</h3>
<button onClick={() => setCount(count + 1)}>
Increment
</button>
<button onClick={() => setCount(count - 1)}>

Decrement
</button>
<button onClick={() => setCount(0)}>
Reset
</button>
<hr />


<Student
name="Dinesh"

course="FSWD"
/>















      <div>
        <img
  src="/Reactwhy.jpg"
  alt="React JS Fact Sheet"
  style={{
    width: "100%",
    maxWidth: "800px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  }}
/>
      </div> 
     
    </>
  );
}

export default App;