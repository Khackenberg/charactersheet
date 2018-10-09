import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {
   constructor(props){
     super(props)
      this.state ={
        drawbox: false //"random"
      }
      this.randomBox =this.randomBox.bind(this)
      this.drawBox =this.drawBox.bind(this)
    }

    
       
        

    

  drawBox(){
    this.setState({
      drawbox: true
    })
      
        return(<div  className="tile"></div>)
        }
  randomBox(){
      
        return(<div  className="random"></div>)
        }

  
  render() { 
    return (
      <div  onClick={this.state.randomBox} className="tile">
      <p className="tile"></p>
      {this.randomBox()}
      </div>
  
        
      
     
    );
  }
}


export default App;
