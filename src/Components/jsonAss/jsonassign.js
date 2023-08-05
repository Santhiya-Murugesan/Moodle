import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './jsonassign.css'
import StarRatings from "react-star-ratings"
function Mobiles(){

    const [mobile,setMobile]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/jsonAssignment.json")
        .then(out=>out.json())
        .then(jsonAssignment=>setMobile(jsonAssignment))
    })

    return(
        <>
        <div className='container-fluid row justify-content-around p-5'>
        {
            mobile.map((value,index)=>
            <>
                <div className='card col-lg-2 p-3'>
                    <img src={value.image} className='card-imagetop jsonimg'/>
                        <div className='card-body'>
                            <h3 className='card-title'>{value.name}</h3>
                            <h4 className='card-title'>{value.brand}</h4>
                            <p className='card-text'>{value.description}</p>
                            <h5 className='card-text'>Price:${value.price}</h5>
                            <StarRatings rating={parseInt(value.rating)} starDimension="15" starRatedColor="gold" name="rating" numberOfStars={5}/>
                        </div>
                    </div>
            </>
            )
        }
        </div>
        </>
    );
}
export default Mobiles
