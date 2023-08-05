import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ResuableBanner.css';
import {Link} from "react-router-dom"
function ResuableBanners(){
    return(
        <>
        <nav class="navbar bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand"  >
      <img src="https://blog.logrocket.com/wp-content/uploads/2020/07/react-native-geolocation.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top"/>ReactJS</a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar1">
  <div class="container-fluid">
    {/* <a class="navbar-brand"  >ReactJS</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to='/hello' className="nav-link"><li>helloworld</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/login' className="nav-link"><li>Login Design</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/Notify' className="nav-link"><li>Notifications Application</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/SocialBtn' className="nav-link"><li>SocialButton</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/SuperOver' className="nav-link"><li>SuperOverLeague</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/tech' className="nav-link"><li>Technologycards</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/congrats' className="nav-link"><li>Congratscards</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/counter' className="nav-link"><li>Counter</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/fruit' className="nav-link"><li>Fruit</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/feed' className="nav-link"><li>FeedbackApp</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/date' className="nav-link"><li>DateFunc.</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/mob' className="nav-link"><li>jsonAssignment</li></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
        
    );
}
export default ResuableBanners;