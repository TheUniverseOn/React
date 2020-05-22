import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputfield, setInput] = useState('')

   const updateInput = (event) =>{
   
    setInput(event.target.value)
  }

    return (
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={inputfield} onChange={updateInput}/>
<h1>{inputfield}</h1>
          
        </div>
      </div>
    );
  }


export default App;




//slightly different way. 
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputfield, setInput] = useState('')



    return (
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={inputfield} onChange={(e) => setInput(e.target.value)}/>
          <p>{inputfield}</p>
          
        </div>
      </div>
    );
  }


export default App;
