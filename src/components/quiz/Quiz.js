import React, { useState } from 'react'
import { QuizPage, QuizBox, AnswersBox, Question } from './QuizStyles'
import AnswerItem from './AnswerItem';
import { Link, Redirect } from 'react-router-dom'

const Quiz = ({quiz, checkAnswer, correctAnswers, incorrectAnswers}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [disable, setDisable] = useState(false)
    const onAnswerClick = (e, clickedAnswer, correctAnswer) => {
        checkAnswer(e, clickedAnswer, correctAnswer)
        setDisable(true)
        setTimeout(() => {
            setQuestionIndex(questionIndex+1)
          }, 2000);
    }
   
    return (
        <QuizPage>
            <QuizBox>
            <Link to='/'>Home</Link>
                <Question>Q{questionIndex + 1}.{(quiz[questionIndex].question)}</Question>
                    <AnswerItem answers={quiz[questionIndex].incorrect_answers} correctAnswer={quiz[questionIndex].correct_answer}
                     onAnswerClick={onAnswerClick} disable={disable}/>
            </QuizBox>
        </QuizPage >

    )
}




export default Quiz;