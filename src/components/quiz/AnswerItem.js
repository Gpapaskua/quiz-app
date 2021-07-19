import React from 'react'
import styled from 'styled-components'
import { useAllAnswers } from '../contexts/useAllAnswers';
import { AnswersBox } from './QuizStyles';

const AnswerItem = (props) => {
    const {answers, correctAnswer} = props
    const allAnswers = useAllAnswers(answers, correctAnswer)
    return (

        <AnswersBox>
            {
            allAnswers.map((ans) => {
            return <Answer onClick={props.onAnswerClick} value={ans}>
                <span>{ans}</span></Answer>
        })
    }
        </AnswersBox>

    )
}

const Answer = styled.div`
    font-size: 1rem;
    width: 60%;
    background: #85FFBD;
    padding: 1rem 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        cursor: pointer;
        background: #FFFB7D;
        color: #000;
        transform: scale(1.03);
    }
    @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`
export default AnswerItem;