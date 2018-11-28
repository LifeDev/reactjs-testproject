import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      {
        id: 'ascsda',
        name: 'Max',
        age: 19
      },
      {
        id: 'qwevrs',
        name: 'Alex',
        age: 17
      },
      {
        id: 'gdhsas',
        name: 'Stephanie',
        age: 20
      }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    var arr = [1,2,3,4,5]
    console.log(arr);
    console.log(...arr);
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };


    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person click={this.deletePersonHandler.bind(this, index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />);
          })}
          </div>
      );

      style.backgroundColor = "red";
      style[':hover']: {
        backgroundColor: "lightred",
        color: "black"
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (


      <div className="App">
        <h1>Hi, I am React App</h1>
        <p className={classes.join(' ')}>Remaining Persons: {this.state.persons.length}</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}


      </div>
    );

  }
}

export default Radium(App);
