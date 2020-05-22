import React, { useState } from "react";
import "./styles.css";
 

class  App extends React.Component{
state = {
value: '', 
items:[],
}

 handleChange = (e) => {
  this.setState({value: e.target.value})
  }



 newItemAdd = e => {
 e.preventDefault(); 
 this.setState(oldState => ({ items: [...oldState.items, this.state.value], }));
}
render(){
  return (
    <div className="App">
      <h1> Todo List App </h1>
      <h2>By The Frontend Master Sophonias</h2>
<form onSubmit={this.newItemAdd}> 
<input type="text" placeholder="add items" value={this.state.value} onChange={this.handleChange}/>
<button>add </button>
</form>

<p>Items</p>
<ol>{this.state.items.map((item, index) => <li key={index}> {item}</li>)} 
</ol>

    </div>
  );
}
}

export default App; 
