import React from 'react'
import './loginDesign.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
function LoginDesign(){
    return(
        <>
            <div className='divbg'>
                <div className=' container p-5'>
                    <div className='row bg-white div1'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-5'>
                        <div>
                            <img src='https://techcult.com/wp-content/uploads/2021/12/How-to-fix-Icons-on-Desktop.jpg' className='image'/>
                        </div></div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-5'>
                            <form>
                                <h1>Member Login</h1>
                                <div className='icondiv p-1'>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                    <input type='email' name='email' value='' id='email' placeholder='Email' className='inputbox col-lg-7 col-md-5 col-sm-3'/></div><br/>
                                <div className='icondiv p-1'>
                                    <FontAwesomeIcon icon={faLock}/>
                                    <input type='password' name='password' value='' id='password' className='inputbox col-lg-7 col-md-5 col-sm-3'/></div><br/>
                                <button className='btn btn-success col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>LOGIN</button>
                                <div className='text-center'>
                                <p className='p-2'>Forget <span className='anc'>Username/Password?</span></p>
                                <p className='anc'>Create your account<FontAwesomeIcon icon={faArrowRight}/></p>
                                </div>
                            </form>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginDesign;