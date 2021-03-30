import React, { useState } from 'react'
import { QuizPage, QuizBox, AnswersBox, Question } from './QuizStyles'
import AnswerItem from './AnswerItem';
import { Redirect } from 'react-router-dom'
import Preloader from '../../preloader/Preloader';

const Quiz = (props) => {
    let [questionIndex, setQuestionIndex] = useState(0);
    let onAnswerClick = (e) => {
        let clickedAnswer = e.target.value;
        props.checkAnswer(clickedAnswer, props.quiz[questionIndex].correct_answer, questionIndex);
        setQuestionIndex(questionIndex + 1);

    }
    if (props.quiz.length === 0) {
        return (
            <Preloader />
        )
    }
    if (questionIndex == props.questions) {
        return (
            <Redirect to={"/results"} />
        )
    }


    let quiz = props.quiz;
    let answers = quiz[questionIndex].incorrect_answers;
    return (
        <QuizPage>
            <QuizBox>
                <Question>Q{questionIndex + 1}.&nbsp;{quiz[questionIndex].question}</Question>
                <AnswersBox>
                    <AnswerItem correctAnswer={quiz[questionIndex].correct_answer}
                        answers={answers} onAnswerClick={onAnswerClick} />
                </AnswersBox>
            </QuizBox>
        </QuizPage >

    )
}




export default Quiz;