import React from 'react'
import {FaTwitter , FaHome, FaHashtag,FaRegBell ,FaRegEnvelope, FaClipboardList, FaRegBookmark, FaUserAlt, FaMehBlank} from "react-icons/fa";
const Sidebar=()=>{
    return(
        <div>
            <ul>
                <li>
                    <a href="">
                        <FaTwitter></FaTwitter>Twitter
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaHome></FaHome>Home
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaHashtag></FaHashtag>Explore
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaRegBookmark></FaRegBookmark>Bookmarks
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaClipboardList></FaClipboardList>Lists
                    </a>
                </li>
                <li>
                    <a href="">
                       <FaUserAlt></FaUserAlt>User
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaMehBlank></FaMehBlank>More
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar