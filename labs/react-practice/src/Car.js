import {useState, useEffect} from 'react';

function Car(props){
    const[editMode,setEditMode] = useState(false);
    const[make,setMake] = useState("");

    useEffect(()=>{
        setMake(props.car.make);
    },[props.car]);

    let cardClasses = 'card';

    if(props.color==='danger'){
        cardClasses += ' bg-danger text-white';
    }

    function onChangeMake(evt){
        const newMake = evt.currentTarget.value;
        setMake(newMake);
    }

    function onEdit(){
        setEditMode(true);
        setMake(props.car.make);
    }

 return(
    <div className={cardClasses}>
    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."></img>
    {!editMode && <div className="card-body">
        <h2 className="card-title">{props.car.make}</h2>
         <p>{props.car.model} {props.car.year} </p>
         <button type="button" onClick={onEdit}>Edit</button>
         
    </div>}
    {editMode && 
    <form>
        <div className="card-body">
        
        <label htmlFor='txtMake'>Car Make</label>
        <input type="text" id='txtMake' className="form-control" value={make} onChange={onChangeMake} />
        <label htmlFor='txtModel'>Car Model</label>
        <input type="text" id='txtModel' className="form-control" value={props.car.model} />
        <label htmlFor='txtYear'>Car Year</label>
        <input type="text" id='txtYear' className="form-control" value={props.car.year} />
        <button type="button" onClick={() => console.log("Save")}>Save</button>
        <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
        </div>
    </form>
    }
</div>
 );
}

export default Car;