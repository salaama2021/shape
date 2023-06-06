function DisplayEmployee (props)
    
   
return (
    <div>
        <h2>Employee history</h2>
  {props.employees.map((data)=>{
  
    return(
    <div>
        <h6>{data.name}</h6>
        <h6>{data.surname}</h6>
        <h6>{data.email}</h6>
        <h6>{data.bio}</h6>
        <h6>{data.image}</h6>
        <h6>{data.dateofbirth}</h6>
        <h6>{data.employeeposition}</h6>
        <h6>{data.phonenumber}</h6> 
  </div>
</div>


 
    )
}

export default DisplayEmployee
