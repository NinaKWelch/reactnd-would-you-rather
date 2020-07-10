import React, { useState } from 'react';
import QuestionList from './QuestionList';

const Home = ({ questions, authedUser }) => {
    const [value, setValue] = useState("answered");

    const questionIds = Object.keys(questions)
    const answeredIds = Object.keys(authedUser.answers)

    const filterArr = arr => {
        const newArray = []
        arr.forEach(a => answeredIds.includes(a) ? '' : newArray.push(a))
        return newArray
    }

    
    return (
        <div>
            <button
                onClick={e => setValue(e.target.value)}
                value="answered"
            >
                Answered Questions
            </button>
            <button
                onClick={e => setValue(e.target.value)}
                value="unanswered"
            >
                Unanswered Questions
            </button>
            <QuestionList
                questionIds={value === "answered" ? answeredIds : filterArr(questionIds)}
            />
        </div>
    );
}

export default Home;