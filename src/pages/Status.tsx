import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import { FormEvent, KeyboardEvent, useState } from "react";

import { RxPaperPlane } from "react-icons/rx";


import './Status.css';


export function Status() {

    const [newAnswer, setNewAnswer] = useState('');

    const [answers, setAnswers] = useState([
        'Concordo',
        'Faz sentido',
        'Parabens pelo progresso.'
    ]);

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();

        setAnswers([newAnswer, ...answers]);
        setNewAnswer('');

    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers]);
            setNewAnswer('');
        }
    }

    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolore quos deserunt error officia debitis nesciunt corporis hic quae rem, consequatur magnam placeat atque mollitia alias, repudiandae culpa molestias? Vero?" />

            <Separator />

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
                <label htmlFor="tweet">
                    <img src="https://github.com/vandersontavares.png" alt="user-pic" />
                    <textarea id="tweet" placeholder="Tweet your answer" value={newAnswer} onKeyDown={handleHotkeySubmit} onChange={(e) => { setNewAnswer(e.target.value) }}></textarea>
                </label>
                <button type="submit"><RxPaperPlane/><span>Answer</span></button>
            </form>



            {answers.map((answer) => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}
