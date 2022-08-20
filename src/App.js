import {useState} from 'react'
import './App.css';

function App() {
  const [Given, setGiven] = useState("");
   const change = (event) =>{
     setGiven(Given.concat(event.target.value))
   }
   const clear = ()=>{
    setGiven("");
   }
   const result = () =>{
    setGiven(eval(Given));
   }

  return (
    <>
    <div class="container">
        <h1 class="header">Calculator</h1>
        <div name="form">
            <input type="text" name="output" class="output" value={Given}/><br></br>
            <input type="button" value="7" onClick={change} class="buttons"/>
            <input type="button" value="8" onClick={change} class="buttons"/>
            <input type="button" value="9" onClick={change} class="buttons"/>
            <input type="button" value="+" onClick={change} class="buttons"/>
            <br></br>
            <input type="button" value="4" onClick={change} class="buttons"/>
            <input type="button" value="5" onClick={change} class="buttons"/>
            <input type="button" value="6" onClick={change} class="buttons"/>
            <input type="button" value="-" onClick={change} class="buttons"/>
            <br></br>
            <input type="button" value="1" onClick={change} class="buttons"/>
            <input type="button" value="2" onClick={change} class="buttons"/>
            <input type="button" value="3" onClick={change} class="buttons"/>
            <input type="button" value="*" onClick={change} class="buttons"/>
            <br></br>
            <input type="button" value="." onClick={change} class="buttons"/>
            <input type="button" value="0" onClick={change} class="buttons"/>
            <input type="button" value="/" onClick={change} class="buttons"/>
            <input type="button" value="=" onClick={result} class="equalto"/>
            <br></br>
            <input type="button" value="C" onClick={clear} class="clear"/>
        </div>
     </div>
    </>
  );
}

export default App;
