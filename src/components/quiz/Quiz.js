import React, { useState } from 'react'
import { QuizPage, QuizBox, AnswersBox, Question } from './QuizStyles'
import AnswerItem from './AnswerItem';
import { Redirect } from 'react-router-dom'

const Quiz = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const { quiz } = props
    const onAnswerClick = (e) => {
        const clickedAnswer = e.target.value;
        console.log(clickedAnswer)

    }
   
    if (questionIndex == props.questions) {
        return (
            <Redirect to={"/results"} />
        )
    }
    return (
        <QuizPage>
            <QuizBox>
                <Question>Q{questionIndex + 1}.{(quiz[questionIndex].question)}</Question>
                    <AnswerItem answers={quiz[questionIndex].incorrect_answers} correctAnswer={quiz[questionIndex].correct_answer}
                     onAnswerClick={onAnswerClick} />
            </QuizBox>
        </QuizPage >

    )
}




export default Quiz;