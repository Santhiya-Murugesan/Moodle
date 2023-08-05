import React from 'react'
import './Technologycards.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
function Technologycards(){
    return(
        <>
        <div className='bgColor'>
        <div className='container'>
            <div className='div1'>
                <h1 className='h1'>Learn 4.0 Technologies</h1>
                <p>Get trained by alumini of IITs and top comppanies like Amazon,Microsoft,Intel,Nvidia,Qualcomm, etc.Learn directly from professionalcards involved in Product Development</p>
            </div>
            <div className='container row justify-content-center'>
            <div className='card cardDiv card1 col-lg-5 col-xl-5 col-md-10 col-sm-10 m-2 p-2'>
                <h2 className='h2'>DataScientist</h2>
                <p>A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions.</p>
                <img src='https://cdn-icons-png.flaticon.com/512/4240/4240994.png' className='image'/>
            </div>
            <div className='card cardDiv card2 col-lg-5 col-xl-5 col-md-10 col-sm-10 m-2 p-2'>
                <h2 className='h2'>IOT Developer</h2>
                <p>IoT developers possess the skills of machine learning and big data management that helps them in making predictions based on the identification of data patterns.</p>
                <img src='https://www.tekkiwebsolutions.com/wp-content/uploads/Development-Service-1.jpg' className='image'/>   
            </div>
            <div className='card cardDiv card3 col-lg-5 col-xl-5 col-md-10 col-sm-10 m-2 p-2'>
                <h2 className='h2'>VR Developer</h2>
                <p>A VR developer creates whole new digital settings that users can see through a device like the Oculus headset</p>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBGyLo1Bb0iokYF9xR3ThH9MVW4fLeWkywg&usqp=CAU' className='image'/>
            </div>
            <div className='card cardDiv card4 col-lg-5 col-xl-5 col-md-10 col-sm-10 m-2 p-2'>
                <h2 className='h2'>ML Engineer</h2>
                <p>A ML engineer is a person in IT who focuses on researching, building and designing self-running AI systems to automate predictive models.</p>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqA6VkzRoSpLBx-sZu5XkvA9W-VpH9ah3RV8YVUvSM_xN6ngRyUVCQ54oF5jwZ5gsLXq8&usqp=CAU' className='image'/>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Technologycards;



