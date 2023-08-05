import React from "react";
import './Feedback.css';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam, faFaceMeh, faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
function Feedbackapp(){
    return(
        <>
        <div className="text-center p-5 feedbg">
            <div className="bg-white p-5">
                <h3>How satisfied are you with our<br/>customer support performance?</h3>
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 justify-content-center text-center">
                                <Link to='/response'><FontAwesomeIcon icon={faFaceSadTear} className="fbfont"/><br/><p className="fbpara">Sad</p></Link>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 justify-content-center text-center">
                                <Link to='/response'><FontAwesomeIcon icon={faFaceMeh} className="fbfont"/><br/><p className="fbpara">None</p></Link>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 justify-content-center text-center">
                                <Link to='/response'><FontAwesomeIcon icon={faFaceLaughBeam} className="fbfont"/><br/><p className="fbpara">Happy</p></Link>
                            </div>
                        </div>
                    </div>
             </div>
        </div>
        
        </>
    );
}
export default Feedbackapp;

