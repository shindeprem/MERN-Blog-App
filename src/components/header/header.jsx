import { useState } from 'react';
import './header.css'
import { IoSearchOutline } from "react-icons/io5";
import { PiNotePencilThin } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";

const Header = ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    return(
        <div className="header-container">
            <div className="nav-container">
                <div className="nav-1 sec-1">
                   <div className="website-logo">
                        Byte<span>Post</span>
                    </div> 

                    <div className="search-input-container">
                        <div className="search-logo-container">
                            <IoSearchOutline/>
                        </div>
                        <input type="text" name="user-search-query" placeholder='Search' id="" className='search-input'/>
                    </div>
                </div>
                <div className="nav-2 sec-2">
                    {(!isLoggedIn && 
                        <div className="scnd-nav">
                            <div className="write-to-signinup">
                                <PiNotePencilThin/> <span>Write</span>
                            </div>
                            <div className="more-items-nav2">
                                <CiMenuKebab/>
                            </div>
                        </div>)}
                </div>
                <div className="nav-2 sec-2" style={isLoggedIn?{display:'flex'}:{display:'none'}}>
                    {(isLoggedIn && 
                        <div className="scnd-nav">
                            <div className="write-to-signinup">
                                <PiNotePencilThin/> <span>read</span>
                            </div>
                            <div className="more-items-nav2">
                                <CiMenuKebab/>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Header;