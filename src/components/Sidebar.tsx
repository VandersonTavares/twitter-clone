import { BsHouseDoorFill, BsHash } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { TfiBookmark } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";

import { Link } from "react-router-dom";

import "./Sidebar.css";

import twitterLogo from '../assets/logo-twitter.svg';

export function Sidebar() {
    return (
        <aside className='sidebar'>
            <img className='logo' src={twitterLogo} alt="logo" />
            <nav className='main-navigation'>
                <Link className='active' to="/">
                    <BsHouseDoorFill />
                    Home
                </Link>
                <a href="link">
                    <BsHash />
                    Explore
                </a>
                <a href="">
                    <IoMdNotificationsOutline />
                    Notification
                </a>
                <a href="">
                    <GoMail />
                    Messages
                </a>
                <a href="">
                    <TfiBookmark />
                    Bookmarks
                </a>
                <a href="">
                    <AiOutlineUser />
                    Profile
                </a>
                <a href="">
                    <CiCircleMore />
                    More
                </a>
            </nav>

            <button className='new-tweet' type='button'>Tweet</button>
        </aside>
    )
}

