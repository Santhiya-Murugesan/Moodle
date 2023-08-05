import React from "react";
import './socialButton.css';
import 'bootstrap/dist/css/bootstrap.css';
function SocialButton()
{
    return(
        <>
            <div className="mainDiv">
                <div className="divButton">
                    <h1 className="head col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Social Buttons</h1>
                    <button className="btn btn-warning m-2 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">Like</button>
                    <button className="btn btn-light m-2 col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">Comment</button>
                    <button className="btn btn-primary m-2 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">Share</button>
                </div>
            </div>
        </>
    );
}
export default SocialButton;


