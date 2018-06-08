import React from 'react';
import classes from './Header.css';

// 无状态组件
const MyHeader = (props) => {
  const assignedClasses = []; 

  const style = {
    backgroundColor: 'green',
    color:"white",
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  if(props.showPersons){
    style.backgroundColor = "red";
  }

  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);  // class = ['red']
  }

  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);  // class = ['red','bold']
  }

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Hi, React App</p>
      <button style={style} onClick={props.clicked}>内容切换</button>  
    </div>
  )
}

export default MyHeader;