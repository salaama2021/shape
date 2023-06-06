

import { useState } from "react";
function AddEmployee (props){

    const [name, setName]=useState('');
    const[surname, setSurname]=useState('');
    const[email, setEmail]=useState('');
    const [bio, setBio]=useState('');
    const[image, setImage]=useState('');
    const[dateofbirth, setDateOfBirth]=useState('');
    const[employeeposition, setEmployeePosition]=useState('');
    const[phonenumber, setPhoneNumber]=useState('');
    const[employeeType, setEmployeeType]=useState('');
    const add=(() =>{
        props.add(name,surname,email,bio,image,dateofbirth,employeeposition,phonenumber,employeeType);
    })

    return(
        <div>
            <h1>EMPLOYEE LOGGING SYSTEM</h1>
            <input type="text" placeholder=" name" onChange={(event)=> setName(event.target.value)} />
            <input type="text" placeholder="surname" onChange={(event)=> setSurname(event.target.value)} />
            <input type="text" placeholder="email" onChange={(event)=> setEmail(event.target.value)} />
            <input type="text" placeholder="bio" onChange={(event)=> setBio(event.target.value)} />
            <input type="text" placeholder="image" onChange={(event)=> setImage(event.target.value)} />
            <input type="text" placeholder="dateofbirth" onChange={(event)=> setDateOfBirth(event.target.value)} />
            <input type="text" placeholder="employeeposition" onChange={(event)=> setEmployeePosition(event.target.value)} />
            <input type="text" placeholder="phonenumber" onChange={(event)=> setPhoneNumber(event.target.value)} />

            <select onChange={(event)=> setEmployeeType(event.target.value)}>
                <option>Permanent</option>
                <option>Temporary</option>
            </select>
            <br></br>
            <button onClick={add}>Add new employee</button>
            </div>
    );
}

export default AddEmployee