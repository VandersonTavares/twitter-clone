import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

const answers = [
    'Concordo',
    'Faz sentido',
    'Parabens pelo progresso.'
]

export function Status() {
    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolore quos deserunt error officia debitis nesciunt corporis hic quae rem, consequatur magnam placeat atque mollitia alias, repudiandae culpa molestias? Vero?" />

            <Separator />

            <form className='answer-tweet-form'>
                <label htmlFor="tweet">
                    <img src="https://github.com/vandersontavares.png" alt="user-pic" />
                    <textarea id="tweet" placeholder="Tweet your answer"></textarea>
                </label>
                <button type="submit">Answer</button>
            </form>



            {answers.map((answer) => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}
