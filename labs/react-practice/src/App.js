import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('Evan');
    const[student,setStudent]=useState({name:"Ryan",age:18});


    function updateStudent(evt){
      console.log("update student called");
      if(evt.currentTarget.id === "txtFirstName"){
        setStudent({...student,name:evt.currentTarget.value})
      }
      else{
        setStudent({...student,age:evt.currentTarget.value})
      }
    }

    return (
      <div>
        <p>You clicked {count} times</p>
        <label htmlFor="txtFirstName">User Name:</label>
        <input id="txtFirstName" type="text" value={student.name} onChange={(evt) => updateStudent(evt)}  />
        <label htmlFor="txtAge">Age:</label>
        <input id="txtAge" type="text" value={student.age} onChange={(evt) => updateStudent(evt)} />
        <h1>{student.name} is {student.age} years old</h1>
        <button className="btn btn-lg btn-success" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        {/* <button id="btnUpdateStudent" className="btn btn-lg btn-warning" onClick={(evt) => updateStudent(evt)}>Update Student</button> */}
      </div>

      
    );
}

export default App;
