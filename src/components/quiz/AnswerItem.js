import React from 'react'
import styled from 'styled-components'
import { useAllAnswers } from '../../helpers/utils';
import { AnswersBox, Answer } from './QuizStyles';

const AnswerItem = (props) => {
    const {answers, correctAnswer} = props
    const allAnswers = useAllAnswers(answers, correctAnswer)
    return (

        <AnswersBox>
            {
            allAnswers.map((ans) => {
            return <Answer  onClick={(e) => props.onAnswerClick(e, ans, correctAnswer)} disabled={!props.disable}>
                <span>{ans}</span></Answer>
        })
    }
        </AnswersBox>

    )
}


export default AnswerItem;