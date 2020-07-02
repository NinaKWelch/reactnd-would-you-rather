import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const Home = ({ questions, user }) => {
    const [value, setValue] = useState(true);

    const filterQuestions = event => {
        const newValue = event.target.value;
        setValue(newValue);
    };

    return (
        <div>
            <button onClick={filterQuestions} value={true}>Answered Questions</button>
            <button onClick={filterQuestions} value={false}>Unanswered Questions</button>
            {value && questions.map(question => (
                <QuestionCard
                    key={question.id}
                    question={question}
                    user={user}
                    answered={value}
                />
            ))}
        </div>
    );
}

export default Home;
