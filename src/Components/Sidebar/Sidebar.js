import React from "react";
import {Twitter} from "react-bootstrap-icons";
import * as Icon from 'react-bootstrap-icons';
import SidebarItem from "../SidebarItem/SidebarItem";
import "./Sidebar.css"
import Button from "../Button/Button";


function Sidebar(){
 
  return(


    <div className="sidebar">
  <Twitter className="Twitter-logo"/>
 <SidebarItem Icon={Icon.HouseDoor} text="Home"/>
 <SidebarItem Icon={Icon.Hash} text="Explore"/>
 <SidebarItem Icon={Icon.Bell} text="Notifications"/>
 <SidebarItem Icon={Icon.Envelope} text="Messages"/>
 <SidebarItem Icon={Icon.Bookmark} text="BookMarks"/>
 <SidebarItem Icon={Icon.CardList} text="Lists"/>
 <SidebarItem Icon={Icon.Person} text="Profile"/>
 <SidebarItem Icon={Icon.ThreeDots} text="More"/>
 {/*<button variant="outlined" className="Sidebar__TweetButton" > Tweet</button> 
 <Button style={{backgroundColor:"#18a1d6"}} value="Tweet"></Button>
 */}
 <Button style={{color:"white"}} value="Tweet"></Button>
 
 




    </div>
  );

}
export default Sidebar;
