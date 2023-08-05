import React from "react"
import './congratscards.css';
import 'bootstrap/dist/css/bootstrap.css'
function Congrats_cards()
{
    return(
        <>
        <div className="mymainDiv p-5 container-fluid">
            <h1 className="heading">Congratulations</h1>
            <div className="innerDiv col-lg-5">
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className=" m-lg-3 col-lg-3 col-7"/>
                <p className="name">Kiran V</p>
                <p className="p-1" >Vishnu Institute of Computer Education and Technology,</p><p> Bhimavaram</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYv0t2zv1QfDnG7Ls6EPEkfj1JL9dBB_jhQ&usqp=CAU" className="img1 col-lg-4 col-9 mb-2"/>
            </div>
        </div>
        </>
    );
}
export default Congrats_cards; 