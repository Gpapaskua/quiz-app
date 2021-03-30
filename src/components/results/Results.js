import React from 'react'
import { ResultsPage, ResultItems, ResultsBox, AnswerResults, NewQuiz, QuizHeader } from './ResultsStyles'

const Results = (props) => {
    return (
        <ResultsPage>
            <ResultsBox>
                <QuizHeader>Quiz finished!</QuizHeader>
                <ResultItems>
                    <span>Total Questions</span>
                    <span>{props.totalQuestions}</span>
                </ResultItems>
                <ResultItems>
                    <AnswerResults correctAnswer>Correct answers</AnswerResults>
                    <AnswerResults correctAnswer>{props.correctAnswers}</AnswerResults>
                </ResultItems>
                <ResultItems>
                    <AnswerResults>wrong answers</AnswerResults>
                    <AnswerResults>{props.wrongAnswers}</AnswerResults>
                </ResultItems>
                <NewQuiz to='/' onClick={props.clearQuiz}>new quiz</NewQuiz>
            </ResultsBox>
        </ResultsPage>
    )
}




export default Results;