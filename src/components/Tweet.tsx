import { BsChat, BsHeart } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

import { Link } from "react-router-dom";

import './Tweet.css';

interface TweetProps{
    content: string;
}

export function Tweet({ content }: TweetProps) {
    return (
        <Link to="/status" className='tweet'>
            <img src="https://github.com/vandersontavares.png" alt="use-pic" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Vanderson Tavares</strong>
                    <span>@zerobyrox</span>
                </div>
                <p>
                   {content}
                </p>
                <div className="tweet-content-footer">

                    <button type='button'>
                        <BsChat /> 20
                    </button>

                    <button type='button'>
                        <FiRefreshCw /> 20
                    </button>

                    <button type='button'>
                        <BsHeart /> 20
                    </button>

                </div>
            </div>
        </Link>
    )
}