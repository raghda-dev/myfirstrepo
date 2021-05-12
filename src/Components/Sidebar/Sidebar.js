import React from "react";
import {Twitter} from "react-bootstrap-icons";
import * as Icon from 'react-bootstrap-icons';
import SidebarOption from "../SidebarOption/SidebarOption";
import "./Sidebar.css"
import Button from "../Button/Button";


function Sidebar(){
 
  return(


    <div className="sidebar">
  <Twitter className="Twitter-logo"/>
 <SidebarOption Icon={Icon.HouseDoor} text="Home"/>
 <SidebarOption Icon={Icon.Hash} text="Explore"/>
 <SidebarOption Icon={Icon.Bell} text="Notifications"/>
 <SidebarOption Icon={Icon.Envelope} text="Messages"/>
 <SidebarOption Icon={Icon.Bookmark} text="BookMarks"/>
 <SidebarOption Icon={Icon.CardList} text="Lists"/>
 <SidebarOption Icon={Icon.Person} text="Profile"/>
 <SidebarOption Icon={Icon.ThreeDots} text="More"/>
 {/*<button variant="outlined" className="Sidebar__TweetButton" > Tweet</button> 
 <Button style={{backgroundColor:"#18a1d6"}} value="Tweet"></Button>
 */}
 <Button style={{color:"white"}} value="Tweet"></Button>
 
 




    </div>
  );

}
export default Sidebar;
