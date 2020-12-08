import React from "react"
// import { Navbar } from "react-bootstrap"
import "./Header.css"
import {Nav} from "react-bootstrap"
import insta from "./Image/instagram.png"
import direct from "./Image/direct.png"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import youtube1 from "./Image/shiv.jpg"
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

const Navber=()=>{

  return(
    <>
    <div className="navbar">
    <div className="navbar__first">
    <div className=".navbar__first_logo">
      <img src={insta} />
      {/* <p className="clone">clone</p> */}
    </div>
    </div>
    <div className="navbar__middle">
    <div className="navbar__middle_search">
      <input type="text" placeholder="Search" className="navbar__search" />
      <SearchIcon className="searchIcon" />
    </div>
    </div>
    
      <div className="navbar__last">
          <li className="navbar_icon"><HomeIcon/></li>
          <li className="navbar_icon"><img src={direct} height="25" className="insta_direct_logo"/></li>
          <li className="navbar_icon"><ExploreOutlinedIcon /></li>
          <li className="navbar_icon"><FavoriteBorderIcon/></li>
          <li className="navbar_icon">
          <span className="avatar_img">
          <img id="img" class="style-scope yt-img-shadow" className="shiv_imgs" alt="Avatar image" 
           src={youtube1}></img>
          </span>
          </li>
       
        </div>
    </div>
    
  
    </>
  );
}
export default Navber;