import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  return props.persons.map((person,index) => {
    return <Person 
            myclick={() => props.clicked(index)}
            name={person.name}
            count={person.count}
            key={person.id}
            changed={(event) => props.changed(event,person.id)}
          />
  })
}


export default persons;