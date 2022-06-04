import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/homePageNav';
import '../src/style.css';

function Index() {
  return (
    <div>
       <HomePageNav/>
       <img src="https://i.imgur.com/3E03VNY.jpeg" class="img-fluid" width="100%" alt="..."></img>
       <div className="bg-black  pt-3 pb-3 ps-5 pe-5">
           <br/>
       </div>
    </div>
  );
}

export default Index;
