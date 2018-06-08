import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import MyHeader from '../components/Header/Header';

// 有状态组件
class App extends Component {
  // constructor
  constructor(props){
    super(props);
    console.log("[App.js] constuctor is running....",props);

    /** 
     * state: 用于改变组件内容状态的值(动态)
     * props: 用于组件通信进行传值
    */
    this.state = {
      persons:[
        {id:1,name:"米斯特吴",count:52},
        {id:2,name:"Henry",count:5},
        {id:3,name:"Hemiah",count:15}
      ],
      otherState:"anything",
      showPersons:false
    }
  }
  // componentWillMount
  componentWillMount(){
    console.log("[App.js] componentWillMount is running....");
  }
  // componentDidMount
  componentDidMount(){
    console.log("[App.js] componentDidMount is running....");    
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
    console.log("[App.js] render is running....");
   
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                  />
    }

    return (
      <div className="App">
        <MyHeader
          appTitle={this.props.title} 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        
        {persons}   
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
  }
}

export default App;
