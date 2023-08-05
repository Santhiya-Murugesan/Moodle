import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import ResuableBanners from "../ResuableBanners/ResuableBanners";
import LoginDesign from "../Login Design/loginDesign";
import NotificationsApplication from "../Notifications Application/NotificationsApplication";
import SocialButton from "../Social Button/socialButton";
import SuperOverLeague from "../SuperOverLeague/super-over-league";
import Technologycards from "../Technology cards/Technologycards";
import Congrats_cards from "../CongratsCards/congratscards";
import Feedbackapp from "../FeedbackApp/FeedbackApp";
import Datefun from "../Datefunction/date";
import Mobiles from "../jsonAss/jsonassign";
import Counter from "../ReactHook/ReactHook";
import Response from "../FeedbackApp/Feedbackapp1";
import Fruits from "../Fruits Counter/FruitsCounter";
import Hello from "../HelloWorld/helloworld";
function Home(){
    return(
        <>
        <ResuableBanners/>
        <Hello/>
        <LoginDesign/>
        <NotificationsApplication/>
        <SocialButton/>
        <SuperOverLeague/>
        <Technologycards/>
        <Congrats_cards/>
        <Counter/>
        <Fruits/>
        <Feedbackapp/>
        <Datefun/>
        <Mobiles/>
        </>
    );
}
export default Home
