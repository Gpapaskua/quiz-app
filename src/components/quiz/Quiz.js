import React, { useState } from 'react'
import styled from 'styled-components'
import AnswerItem from './AnswerItem';
import { Redirect } from 'react-router-dom'
import Preloader from '../../preloader/Preloader';

const Quiz = (props) => {
    let [questionIndex, setQuestionIndex] = useState(0);
    let [isDisabled, setIsDisabled] = useState(false);
    let onAnswerClick = (e) => {
        let clickedAnswer = e.target.value;
        props.checkAnswer(clickedAnswer, props.quiz[questionIndex].correct_answer);
        setIsDisabled(true);
        setTimeout(() => {
            setQuestionIndex(questionIndex + 1);
            setIsDisabled(false);
        }, 1000);
    }
    if (props.questions === questionIndex) {
        return <Redirect to={'/results'} />
    }
    if (props.quiz.length === 0) {
        return (
            <Preloader />
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
                        answers={answers} onAnswerClick={onAnswerClick} isDisabled={isDisabled} />
                </AnswersBox>
            </QuizBox>
        </QuizPage >

    )
}

const QuizPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

const QuizBox = styled.div`
   -webkit-box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.85); 
    box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.85);
    border-radius: 0.3rem;
    background: #fff;
    height: 90vh;
    width: 50%;
    @media (max-width: 768px) {
    width: 90%;
  }
    
`
const AnswersBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5rem 0 0 0;
    @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`

const Question = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 2rem 1rem 2rem 1.7rem;
    
`


export default Quiz;