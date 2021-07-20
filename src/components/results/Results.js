import React, { useState } from 'react'
import QuizContainer from '../containers/QuizContainer'
import { useQuizCreator } from '../contexts/QuizCreatorContext'
import { QuizButton } from '../quiz/QuizStyles'
import { ResultsPage, ResultItems, ResultsBox, AnswerResults, NewQuiz, QuizHeader } from './ResultsStyles'

const Results = ({questionsCount, correctAnswers, onTryAgain}) => {
    return (
            <ResultsBox>
                <QuizHeader>Quiz finished!</QuizHeader>
                <ResultItems>
                    <span>Total Questions</span>
                    <span>{questionsCount}</span>
                </ResultItems>
                <ResultItems>
                    <AnswerResults correctAnswer>your score</AnswerResults>
                    <AnswerResults correctAnswer>{correctAnswers}</AnswerResults>
                </ResultItems>
                <NewQuiz to='/'>New Quiz</NewQuiz>
                <QuizButton onClick={onTryAgain}>Try again</QuizButton>
            </ResultsBox>
    )
}




export default Results;