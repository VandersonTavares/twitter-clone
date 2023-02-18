import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Timeline.css";


const tweets = [
    'Meu primeiro weet',
    'Meu segundo',
    'deu certo',
    'deu certo'
]

export function Timeline() {
    return (
        <main className="timeline">
            <Header title="Home" />
            <form className='new-tweet-form'>
                <label htmlFor="tweet">
                    <img src="https://github.com/vandersontavares.png" alt="user-pic" />
                    <textarea id="tweet" placeholder="Whats's Happening"></textarea>
                </label>
                <button type="submit">Tweet</button>
            </form>

            <Separator />

            {tweets.map((tweet) => {
                return <Tweet key={tweet} content={tweet} />
            })}

        </main>
    )
}