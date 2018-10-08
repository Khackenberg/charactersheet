import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      name: "",
      strength: "",
      abilities: ""
    }
    this.displayName = this.displayName.bind(this);
    this.displayStrength = this.displayStrength.bind(this);
    this.displayAbilities = this.displayAbilities.bind(this);
  }
  
  
  displayName(event) {
    this.setState({name: event.target.value});
    
  }
  displayStrength(event) {
    this.setState({strength: event.target.value});
    
  }
  displayAbilities(event) {
    this.setState({abilities: event.target.value});
    
  }

  render() {
    return (
      <div>
      <table className="character sheet">
        <tr>
          <td>Name</td>
        </tr>
        <tr>
          <td><input onChange={this.displayName} value={this.state.name} type="text"/></td>
        </tr>
        <tr>
          <td>Strength</td>
        </tr>
        <tr>
          <td><input onChange={this.displayStrength} value={this.state.strength} type="text"/></td>
        </tr>
        <tr>
          <td>Abilities</td>
        </tr>
        <tr>
          <td><input onChange={this.displayAbilities} value={this.state.abilities} type="text"/></td>
        </tr>
      </table>
      <div class= "table">
      Table data here: {this.state.name}{this.state.strength}{this.state.abilities}

    </div>
      </div>
    
  );

  }
  
  
}

export default App;
