import React from 'react'
import './date.css'
import 'bootstrap/dist/css/bootstrap.css'
function Datefun(){
   function mydate(){
         // alert("hi")
    var userdate=document.getElementById("d1").value
    var count=document.getElementById("d2").value
        // alert(count)
        // alert(userdate)
    var date =new Date(userdate);
    date.setDate(date.getDate()+parseInt(count))
        // alert("Your course will end on "+" "+date)
    var numdate=date.getDate(date);
        // alert(numdate)
    var nummonth=date.getMonth(date);
        // alert(nummonth+1)
    var numyear=date.getFullYear(date);
        // alert(numyear)
    document.getElementById("h1").innerHTML=date.getDate(date)+"-"+(date.getMonth()+1)+"-"+(date.getFullYear())
   }
   
    return(
        <>
        
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>&nbsp;
                    </div>
                    <div className='col-lg-6'>
                        <div className='table-responsive text-center text-light'>
                            <table className='table table-bordered'>
                               
                               <thead>
                               <tr>
                                    <th className='text-center text-light'>details</th>
                                </tr>
                               </thead> 
                               <tbody>
                                <tr>
                                    <td className='text-light'>Select your joining date:</td>
                                </tr>
                                <tr>
                                    <td>
                                    <input type="date" id="d1" className='date-btn '/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-light'>No.of days: </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input type="text" id="d2" placeholder="Type date" className='col-lg-4  col-md-12 col-sm-12 col-12'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-light'>Click to get your final date:  </td>
                                </tr>
                                <tr>
                                    <td>
                                    <button className='date-btn col-lg-4 col-md-12 col-sm-12 col-12' onClick={(mydate)}>Click</button>
                                    </td>
                                </tr>
                               </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-lg-3'>&nbsp;
                    </div>
                </div>
            </div>
                <div className='text-center df_h3'>
                <h3>Your final date is: </h3>
                <h3 id="d3"></h3>
                </div>
        </>
    );
}
export default Datefun;