import React from 'react';
import './Feedbackapp1.css';
function Response(){
    return(
        <>
         <div className="feedbg p-5">
                <div className="container-fluid row justify-content-center bg-white text-center">
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 m-3">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png' className='imgfb1'/>
                        <h2>Thank You!</h2>
                        <h4 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">We will use your feedback to improve our customer support performance</h4>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Response;