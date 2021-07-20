import React, { useState } from 'react'
import { QuizPage, QuizBox, QuizItem, HomeLink, Question, CorrectAnswer, QuizInfo, QuizButton } from './QuizStyles'
import AnswerItem from './AnswerItem';
import ResultsContainer from '../containers/ResultsContainer';


const Quiz = ({quiz, checkAnswer, correctAnswers, incorrectAnswers, questionsCount}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [disable, setDisable] = useState(true)
    const [showResults, setShowResults] = useState(false)
    const onAnswerClick = (e, clickedAnswer, correctAnswer) => {
        checkAnswer(clickedAnswer, correctAnswer)
        setDisable(false)
    }
    const onNextQuestion = () => {
        setQuestionIndex(questionIndex+1)
        setDisable(true)
    }
    const  onShowResults = () => {
        setShowResults(true)
    }
    if(showResults){
        return <ResultsContainer questionsCount={questionsCount} correctAnswers={correctAnswers} quiz={quiz}/>
    }
    return (
            <QuizBox>
            <HomeLink to='/'>Home</HomeLink>
            <QuizInfo>
                <span>{questionIndex+1}/{questionsCount}</span>
                <span><span>{correctAnswers}</span>/<span>{incorrectAnswers}</span></span>
            </QuizInfo>
            <CorrectAnswer show={!disable}>
                <span>{quiz[questionIndex].correct_answer}</span>
            </CorrectAnswer>
            <QuizItem>
                <Question>{(quiz[questionIndex].question)}</Question>
                    <AnswerItem answers={quiz[questionIndex].incorrect_answers} correctAnswer={quiz[questionIndex].correct_answer}
                     onAnswerClick={onAnswerClick} disable={disable}/>
                     </QuizItem>
                     {questionsCount == questionIndex+1 ?  <QuizButton disabled={disable} onClick={onShowResults}>Results</QuizButton> :
                        <QuizButton disabled={disable} onClick={onNextQuestion}>Next</QuizButton>}
            </QuizBox>

    )
}




export default Quiz;