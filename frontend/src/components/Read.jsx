import React,{useState,useEffect} from 'react'

const Read = () => {
    const[data,setData]=useState();
    const [error,setError]=useState();
     async function getData(){
      const response=await fetch("http://localhost:5000");
      const result=await response.json();
      console.log("result", result);
      if(!response.ok){
         setError(result.error);
      }
      if(response.ok){
          console.log(response.ok);
          setData(result);
          setError("");
      }
     }
     useEffect(()=>{
      getData();
     },[])
  return (
    <div>
      {error && <div>{error}</div>}
      <div>
        {
          data.map((elem)=>(
           <div key={elem._id}>
            <div>
                <div>
                   <h5>{elem.name}</h5>
                    <h6>{elem.email}</h6>
                    <p>{elem.age}</p>
                    <span>Edit</span>
                    <span>Delete</span>
            </div>
        </div>
      </div>
          ))
        }  
       </div>
    </div>
  )
}

export default Read
