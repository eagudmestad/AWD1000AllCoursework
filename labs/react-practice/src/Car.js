import {useState, useEffect} from 'react';

function Car(props){
    const[editMode,setEditMode] = useState(false);
    const[make,setMake] = useState("");
    const[model,setModel] = useState("");
    const[year,setYear] = useState("");

    useEffect(()=>{
        setMake(props.car.make);
        setModel(props.car.model);
        setYear(props.car.year);
    },[props.car]);

    let cardClasses = 'card';

    if(props.car.color==='red'){
        cardClasses += ' bg-danger text-white';
    }
    if(props.car.color==='green'){
        cardClasses += ' bg-success text-white';
    }
    if(props.car.color==='black'){
        cardClasses += ' bg-dark text-white';
    }
    if(props.car.color==='blue'){
        cardClasses += ' bg-info text-white';
    }

    function onChangeMake(evt){
        const newMake = evt.currentTarget.value;
        setMake(newMake);
    }

    function onEdit(){
        setEditMode(true);
        setMake(props.car.make);
        setModel(props.car.model);
        setYear(props.car.year);
    }

    function onSave(){
      
        const updatedCar = {make:make,model:model,year:parseInt(year)};
        // alert(modCar.make + modCar.model + modCar.year);
        
        props.modifyCar(props.carIndex, updatedCar);
        setEditMode(false);
    }

 return(
    <div className={cardClasses}>
    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."></img>
    {!editMode && <div className="card-body">
        <h2 className="card-title">{props.car.make}</h2>
         <p>{props.car.model} {props.car.year} </p>
         <button type="button" onClick={onEdit} className="btn btn-sm btn-secondary">Edit</button>
         
    </div>}
    {editMode && 
    <form>
        <div className="card-body">
        
        <label htmlFor='txtMake'>Car Make</label>
        <input type="text" id='txtMake' className="form-control" value={make} onChange={onChangeMake} />
        <label htmlFor='txtModel'>Car Model</label>
        <input type="text" id='txtModel' className="form-control" value={model} onChange={(evt) => setModel(evt.currentTarget.value)} />
        <label htmlFor='txtYear'>Car Year</label>
        <input type="text" id='txtYear' className="form-control" value={year} onChange={(evt) => setYear(evt.currentTarget.value)} />
        <button type="button"  className="btn btn-sm btn-secondary" onClick={onSave}>Save</button>
        <button type="button"  className="btn btn-sm btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
        </div>
    </form>
    }
</div>
 );
}

export default Car;