import React  from 'react'
import Preloader from '../../preloader/Preloader';
import { useQuizCreator } from '../contexts/QuizCreatorContext';
import { useQuizData } from '../contexts/useQuizData';
import Quiz from '../quiz/Quiz';

const QuizContainer = () => {
    const {questionsCount, difficulty, categoryId,correctAnswers, incorrectAnswers, checkAnswer } = useQuizCreator()
    const quiz = useQuizData({questionsCount, difficulty, categoryId})
    
    if(quiz){
        return <Quiz quiz={quiz} checkAnswer={checkAnswer}
         correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers}/>
    }
    return (
        <Preloader />
    )
}

export default QuizContainer