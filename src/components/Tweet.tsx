import './Tweet.css';

import { BsChat, BsHeart } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";



export function Tweet() {
    return (
        <a href="#" className='tweet'>
            <img src="https://github.com/diego3g.png" alt="use-pic" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Diego Fernandes</strong>
                    <span>@diegosf</span>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Esse quasi sint expedita, ex provident, sequi aliquid iusto necessitatibus, 
                    fuga maiores blanditiis odit perferendis voluptatum explicabo tenetur possimus corrupti.
                    Libero, sint?
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
        </a>
    )
}