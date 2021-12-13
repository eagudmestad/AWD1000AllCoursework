import './Calculator.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {


    //useState hooks
    const [numOne, setNumOne] = useState("0");
    const[numTwo, setNumTwo] = useState("0");
    const[sum, setSum] = useState("0");

    //function to add two numbers
    function add(){
        
       // let sum = ;

        setSum(parseInt(numOne) + parseInt(numTwo));
    }
    return(
        <div className="container">
            <h1>My Addition Calculator</h1>
            <form id="frmAddition">
                <div className="mb-3">
                    <label className="form-label" htmlFor="txtNumOne">Addend 1</label>
                    <input type="text" id="txtNumOne" name="txtNumOne" className="form-control" value={numOne} onChange={(evt) => setNumOne(evt.currentTarget.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="txtNumTwo">Addend 2</label>
                    <input type="text" id="txtNumTwo" name="txtNumTwo" className="form-control" value={numTwo} onChange={(evt) => setNumTwo(evt.currentTarget.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={add}>Add</button>
                <br />
                <output className="outResult">{sum}</output>
            </form>
        </div>
    )
}

export default Calculator;