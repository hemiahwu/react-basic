import React, { Component } from 'react';
import './Person.css';
class Person extends Component{
  // constructor
  constructor(props){
    super(props);
    console.log("[Person.js] constuctor is running....");
  }
  // componentWillMount
  componentWillMount(){
    console.log("[Person.js] componentWillMount is running....");
  }
  // componentDidMount
  componentDidMount(){
    console.log("[Person.js] componentDidMount is running....");    
  }

  render(){
    console.log("[Person.js] render is running....");    
    
    return (
      <div className="Person">
        <p onClick={this.props.myclick}>大家好,我是{this.props.name}! 我已经拥有{this.props.count}个作品</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
      </div>
    )
  }
}

export default Person;