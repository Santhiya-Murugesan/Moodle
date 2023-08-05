import React,{useState} from 'react';
import './FriutsCounter.css';
import 'bootstrap/dist/css/bootstrap.css'
function Fruits(){
    const [count,setCount]=useState(0);
    const [counts,setCounts]=useState(0);
    return(
        <>
        <div className='fruitbg p-5'>
            <div className='fruitdiv bg-white text-center p-5'>
                <h1 className='fruith1 col-lg-12 col-md-12 col-sm-12 col-12'>Bob ate <span className='fruitspan'>{count}</span> mangoes <span className='fruitspan'>{counts}</span> Bananas</h1>
                    <div className='container frudiv'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-5 col-md-10 col-sm-10 m-2'>
                                <img src='https://thumbs.dreamstime.com/b/mango-ripe-white-background-35283521.jpg' className='fruitimg col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'/><br/><br/>
                                <button className="col-lg-6 col-md-12 btn btn-primary" onClick={()=>setCount(count+1)}>Eat Mango</button>
                            </div>
                         <div className='col-xl-5 col-lg-5 col-md-10 col-sm-10 m-2'>
                                <img src='https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?b=1&s=170667a&w=0&k=20&c=uiSdjIQkTr7S4gEdW_oB_5zfFYhpfe0LP-CryQl49w4=' className='fruitimg col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'/><br/><br/>
                                <button className="col-lg-6 col-md-12 btn btn-primary" onClick={()=>setCounts(counts+1)}>Eat Banana</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Fruits;