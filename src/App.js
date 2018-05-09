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
      {id:1,name:"米斯特吴",count:52},
      {id:2,name:"Henry",count:5},
      {id:3,name:"Hemiah",count:15}
    ],
    otherState:"anything",
    showPersons:false
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

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person
                changed={(event) => this.nameChangedHandler(event,person.id)}
                myclick={() => this.deletePersonHandler(index)}
                key={person.id} 
                name={person.name} 
                count={person.count}/>
            })
          }
          {/* <Person
            changed={this.nameChangedHandler} 
            name={this.state.persons[0].name} 
            count={this.state.persons[0].count}/>
          <Person
            myclick={this.switchNameHandler.bind(this,"米修missu")} 
            name={this.state.persons[1].name} 
            count={this.state.persons[1].count}/>
          <Person 
            name={this.state.persons[2].name} 
            count={this.state.persons[2].count}>非常感谢大家支持我们的课程!</Person> */}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Hi, React App</p>
        {/* <button onClick={() => this.switchNameHandler("米修")}>更改状态值</button> */}
        {/* <button style={style} onClick={this.switchNameHandler.bind(this,"missu")}>更改状态值</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>内容切换</button>  {persons}   
        {/* { this.state.showPersons ?
          <div>
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
          </div> : null
        } */}
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
  }
}

export default App;
