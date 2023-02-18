import { BsHouseDoorFill, BsHash } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { TfiBookmark } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { TiPencil } from "react-icons/ti";

import { NavLink } from "react-router-dom";


import "./Sidebar.css";

import twitterLogo from '../assets/logo-twitter.svg';

export function Sidebar() {
    return (
        <aside className='sidebar'>
            <img className='logo' src={twitterLogo} alt="logo" />
            <nav className='main-navigation'>
                <NavLink to="/">
                    <BsHouseDoorFill />
                    <span>Home</span>
                </NavLink>
                <a href="">
                    <BsHash />
                    <span>Explore</span>
                </a>
                <a href="">
                    <IoMdNotificationsOutline />
                    <span>Notification</span>
                </a>
                <a href="">
                    <GoMail />
                    <span>Messages</span>
                </a>
                <a href="">
                    <TfiBookmark />
                    <span>Bookmarks</span>
                </a>
                <a href="">
                    <AiOutlineUser />
                    <span>Profile</span>
                </a>
                <a href="">
                    <CiCircleMore />
                    <span>More</span>
                </a>
            </nav>

            <button className='new-tweet' type='button'>
                <TiPencil/>
                <span>Tweet</span>
            </button>
        </aside>
    )
}

