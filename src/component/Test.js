import React,{useState} from "react"
// import './App.css';
import {Carousel} from "react-bootstrap"
// import img2 from "./Image/03.png"
// import img3 from "./Image/04.png"
// import img4 from "./Image/05.jpg"
// import youtube1 from "./Image/shiv.jpg"
import "./Header.css"

// import axios from "axios"

const Test=()=>{

  const [state, setState] = React.useState([
    {id:1, image:"/Img/06 (1).jpg",name: "test1"},
    {id:2, image:"/Img/avatar.png",name: "test2"},
    {id:3, image:"/Img/06 (2).png",name: "test3"},
    {id:4, image:"/Img/06 (3).jpg",name: "test4"},
    {id:5, image:"/Img/06 (8).jpg",name: "test5"},
    {id:6, image:"/Img/06 (9).jpg",name: "test6"},
    {id:7, image:"/Img/02.png"    ,name: "test7"},
    {id:8, image:"/Img/05.jpg"    ,name: "test8"},
    {id:9, image:"/Img/shiv.jpg"  ,name: "test9"},
    {id:10,image:"/Img/pubg.jpg"   ,name: "test10"},
])
  return(
    <>
      <div className="stories">
           {/* {
               state.map(user =>(
                <div className="stories_info" key={user.id}>
                <div className="stories_img">
                    <span>
                        <img src={user.image} />
                    </span>
                </div>
                <div className="stories_name">{user.name}</div>
            </div>
               ))
           } */}

           {
            state.map(user =>(
              <div className="stories_info" key={user.id}>
           <Carousel>
            <Carousel.Item>
                <div className="stories_img">
                <span>
                    <img src={user.image} />
                </span>
                </div>
            </Carousel.Item>
           </Carousel>

            </div>
            ))
           }

        </div>
        {/* ===================================== */}
       
    
    </>
  );
}
export default Test;