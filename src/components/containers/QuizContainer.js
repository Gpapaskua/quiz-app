import React  from 'react'
import Preloader from '../../preloader/Preloader';
import { useQuizCreator } from '../contexts/QuizCreatorContext';
import { useQuizData } from '../contexts/useQuizData';
import Quiz from '../quiz/Quiz';

const QuizContainer = () => {
    const {questionsCount, difficulty, categoryId} = useQuizCreator()
    const quiz = useQuizData({questionsCount, difficulty, categoryId})
    if(quiz){
        return <Quiz quiz={quiz}/>
    }
    return (
        <Preloader />
    )
}

export default QuizContainer