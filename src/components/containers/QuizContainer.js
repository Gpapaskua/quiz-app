import React, {useEffect}  from 'react'
import Preloader from '../../preloader/Preloader';
import { useQuizCreator } from '../contexts/QuizCreatorContext';
import { useQuizData } from '../../helpers/utils';
import Quiz from '../quiz/Quiz';

const QuizContainer = ({currentQuiz}) => {
    const {questionsCount, difficulty, categoryId,correctAnswers, incorrectAnswers, checkAnswer, resetAnswers } = useQuizCreator()
    const quiz = useQuizData({currentQuiz, questionsCount, difficulty, categoryId})
    useEffect(() => {
        resetAnswers()
    }, [])
    if(quiz){
        return <Quiz quiz={quiz} checkAnswer={checkAnswer} questionsCount={quiz.length}
         correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers}/>
    }
    return (
        <Preloader />
    )
}

export default QuizContainer