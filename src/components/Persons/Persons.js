import React, { Component } from 'react';
import Person from './Person/Person';

// 有状态组件
class Persons extends Component{
  // constructor
  constructor(props){
    super(props);
    console.log("[Persons.js] constuctor is running....");
  }
  // componentWillMount
  componentWillMount(){
    console.log("[Persons.js] componentWillMount is running....");
  }
  // componentDidMount
  componentDidMount(){
    console.log("[Persons.js] componentDidMount is running....");    
  }

  // 更新组件生命周期钩子函数

  componentWillReceiveProps(nextProps){
    console.log("[UPDATE Persons.js] componentWillReceiveProps is running....",nextProps);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("[UPDATE Persons.js] shouldComponentUpdate is running....",nextProps,nextState);

    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps,nextState){
    console.log("[UPDATE Persons.js] componentWillUpdate is running....",nextProps,nextState);
  }

  componentDidUpdate(prevProps,prevState){
    console.log("[UPDATE Persons.js] componentDidUpdate is running....",prevProps,prevState)
  }



  render(){
    console.log("[Persons.js] render is running....");    
    return this.props.persons.map((person,index) => {
      return <Person 
              myclick={() => this.props.clicked(index)}
              name={person.name}
              count={person.count}
              key={person.id}
              changed={(event) => this.props.changed(event,person.id)}
            />
    })
  }
} 

export default Persons;