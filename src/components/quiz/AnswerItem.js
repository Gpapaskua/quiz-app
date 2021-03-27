import React from 'react'
import styled from 'styled-components'
import { shuffle } from '../../helpers/shuffle';

const AnswerItem = (props) => {
    let answers = [...props.answers];
    answers.push(props.correctAnswer);
    answers = shuffle(answers);
    return (

        answers.map((ans) => {
            return <Answer disabled={props.isDisabled} onClick={props.onAnswerClick} value={ans}>{ans}</Answer>
        })

    )
}

const Answer = styled.button`
    font-size: 1rem;
    width: 40%;
    margin: 1rem;
    background: #85FFBD;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
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