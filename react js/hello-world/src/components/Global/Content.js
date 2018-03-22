//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Content.css';

class Content extends Component {
 /*
  constructor(){
    super(); //para tener acceso al objeto this de esta clase
    this.state= {
      count:0,
      number1:0,
      number2:0,
      result:0
    };
    
    //<.bind> Este metodo obtendra acceso a todo el objeto this
    this.handleCountClick=this.handleCountClick.bind(this); 
    this.handleResultClick=this.handleResultClick.bind(this); 
    this.handleInputChanged=this.handleInputChanged.bind(this); 
  }

  //Comprueba si el componente ya cargo
  componentDidMount(){
    this.setState({
      count:1
    });
  }

  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState({
        count:this.state.count + 1
      });
    }else if(e.target.id === 'rest' && this.state.count>0){
      this.setState({
        count:this.state.count - 1
      });
    }else{
      this.setState({
        count:0
      });
    }
  }

  handleResultClick(e){
    this.setState({
      result:this.state.number1 + this.state.number2
    });

  }

  handleInputChanged(e){
    if(e.target.id === 'number1'){
      this.setState({
        number1:Number(e.target.value)
      });
    }else{
      this.setState({
        number2:Number(e.target.value)
      });

    }

  }
  

  render() {
    console.log("Ejecute Render");
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>

        <p>
          <button id="add" onClick={this.handleCountClick} >+</button>
          <button id="rest" onClick={this.handleCountClick} >-</button>
          <button id="reset" onClick={this.handleCountClick} >reset</button>
        </p>

        <hr/>
        <h4>Calculator</h4>
        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged}/>
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged}/>
          <button id="result" onClick={this.handleResultClick} >=</button>
          {this.state.result}
        </p>
        
      </div>
    );
  }
  */

 static propTypes = {
    body: PropTypes.object.isRequired
  };


  render() {
    const {body} = this.props;
    console.log({body});
    return (

      <div className="Content">
       {body}
      </div>
    
    );
  }

}

export default Content;
