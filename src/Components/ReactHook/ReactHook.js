import React,{useState} from "react";
import './ReactHook.css'
import 'bootstrap/dist/css/bootstrap.css'
function Counter(){
    const [number,setNumber]=useState(0);
    return(
        <>
        <div className="hookbg text-center container-fluid row p-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="hookhead">This page will do some Increment Operation</h1>
            <h1 className="hooknum">{number}</h1>
            <button className="hookbut col-lg-6 col-md-12" onClick={()=>setNumber(number+1)}>Click here to Increment</button>
            <button className="hookbut col-lg-6 col-md-12" onClick={()=>setNumber(number*0)}>Reset</button>
            </div>
        </div>
        
        {/* <button onClick={()=>setNumber(number-1)}>Decrement</button>
        <button onClick={()=>setNumber(number*0)}>Reset</button> */}
        </>
    );
}
export default Counter;