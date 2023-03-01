import React from 'react'
import {FaTwitter, FaHome, FaHashtag,FaRegEnvelope, FaRegBell,FaClipboardList, FaRegBookmark,FaUserAlt,FaMehBlank} from "react-icons/fa";
const SideBar=()=>{
    return(
        <div>
            <u>
                <li>
                    <a href="">
                        <FaTwitter></FaTwitter>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaHome />Home
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaHashtag /> Explore
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaRegBell />Notifications
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaRegBookmark />Bookmarks
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaClipboardList />Lists
                    </a>
                </li>
                 <li>
                    <a href="">
                        <FaUserAlt />User
                    </a>
                </li> 
                 <li>
                    <a href="">
                        <FaMehBlank />More
                    </a>
                </li> 
            </u>
        </div>
    )
}
export default SideBar