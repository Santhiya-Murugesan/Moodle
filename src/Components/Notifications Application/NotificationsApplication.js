import React from 'react'
import './NotificationsApplication.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
function NotificationsApplication(){
    return(
        <>
            <div className='p-5 div1 col-lg-6 text-white'>
                <h1 className='myhead'>Notifications</h1>
                <div className='bg-primary m-2 p-3'><FontAwesomeIcon icon={faCircleCheck}/>Information Message</div>
                <div className='bg-success  m-2 p-3'><FontAwesomeIcon icon={faCircleCheck}/>Success Message</div>
                <div className='bg-warning m-2 p-3'><FontAwesomeIcon icon={faBell}/>Warning Message</div>
                <div className='bg-danger  m-2 p-3'><FontAwesomeIcon icon={faCircleExclamation}/>Error Message</div>
            </div>
        </>
    );
}
export default NotificationsApplication;

