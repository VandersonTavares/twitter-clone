import React from 'react'
import ReactDOM from 'react-dom/client'

import { BsHouseDoorFill, BsHash } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { TfiBookmark } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { HiOutlineSparkles } from "react-icons/hi";




import "./global.css"

import twitterLogo from './assets/logo-twitter.svg';
import { Tweet } from './components/Tweet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="logo" />
        <nav className='main-navigation'>
          <a className='active' href="link">
            <BsHouseDoorFill />
            Home
          </a>
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
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <HiOutlineSparkles/>
          </div>
          <form className='new-tweet-form'>
              <label htmlFor="tweet">
                <img src="https://github.com/diego3g.png" alt="user-pic" />
                <textarea name="tweet" placeholder="Whats's Happening"></textarea>
              </label>
              <button type="submit">Tweet</button>
          </form>
          <div className="separator"/>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
