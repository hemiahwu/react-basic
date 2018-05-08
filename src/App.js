import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /** 
   * state: 用于改变组件内容状态的值(动态)
   * props: 用于组件通信进行传值
  */
  state = {
    persons:[
      {name:"米斯特吴",count:52},
      {name:"Henry",count:5},
      {name:"Hemiah",count:15},
    ],
    otherState:"anything"
  }

  switchNameHandler = (newName) => {
    // console.log("Hello");
    // Don't DO THIS: this.state.persons[0].name = "米斯特";
    this.setState({
      persons:[
        {name:newName,count:52},
        {name:"Henry",count:50000},
        {name:"Hemiah",count:15},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value,count:52},
        {name:"Henry",count:50000},
        {name:"Hemiah",count:15},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Hi, React App</p>
        {/* <button onClick={() => this.switchNameHandler("米修")}>更改状态值</button> */}
        <button style={style} onClick={this.switchNameHandler.bind(this,"missu")}>更改状态值</button>
        <Person
          changed={this.nameChangedHandler} 
          name={this.state.persons[0].name} 
          count={this.state.persons[0].count}/>
        <Person
          myclick={this.switchNameHandler.bind(this,"米修missu")} 
          name={this.state.persons[1].name} 
          count={this.state.persons[1].count}/>
        <Person 
          name={this.state.persons[2].name} 
          count={this.state.persons[2].count}>非常感谢大家支持我们的课程!</Person>
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
  }
}

export default App;
