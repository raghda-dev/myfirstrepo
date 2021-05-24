import React from "react"
import "./SidebarItem.css"

function SidebarItem({text,Icon}){

    return(
        <div className="SidebarOption">
             <Icon className="icon"/> 
             <h2>{text}</h2>
        </div>
    )
}
export default SidebarItem;
