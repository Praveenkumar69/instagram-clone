import React from "react"
import { Dropdown} from "react-bootstrap"
import "./Header.css"
import insta from "./Image/instagram.png"
import direct from "./Image/direct.png"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import youtube1 from "./Image/shiv.jpg"
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import {useHistory } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import SyncIcon from '@material-ui/icons/Sync';

const Navbar=()=>{

  const history = useHistory();

  const logout = (e) =>{
    console.log("ok")
    localStorage.clear();
    history.push("/");


    e.preventDefault();
  }
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
          <Dropdown>

            <Dropdown.Toggle  id="dropdown-basic" className="btn-pri">
            <span className="avatar_img">
          <img id="img" className="style-scope yt-img-shadow" className="shiv_imgs" alt="Avatar image" 
           src={youtube1}></img>
          </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="drop_div">
              <Dropdown.Item href="#/profile"><AccountCircleIcon/>Profile</Dropdown.Item>
              <Dropdown.Item href="#/saved"><TurnedInNotIcon />Saved</Dropdown.Item>
              <Dropdown.Item href="#/settings"><SettingsApplicationsIcon/>Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><SyncIcon/>Switch Accounts</Dropdown.Item>
              <hr></hr>
              <Dropdown.Item href="#/logout" onClick={logout} >Log Out</Dropdown.Item>
              {/* <button><a href="/jj">Log out</a></button> */}

            </Dropdown.Menu>
          </Dropdown>
        
          </li>
       
        </div>
    </div>
    
  
    </>
  );
}
export default Navbar;