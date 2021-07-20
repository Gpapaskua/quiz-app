import React, {useState} from 'react'
import { useQuizCreator } from '../contexts/QuizCreatorContext';
import Results from '../results/Results';
import QuizContainer from '../containers/QuizContainer';

const ResultsContainer = ({quiz, correctAnswers, questionsCount}) => {
    const [tryAgain, setTryAgain] = useState(false)
    const {resetAnswers} = useQuizCreator()
    const onTryAgain = () => {
        resetAnswers()
        setTryAgain(true)
    }
    if(tryAgain){
        return <QuizContainer currentQuiz={quiz}/>
    }
    return (
        <Results  correctAnswers={correctAnswers}
        quiz={quiz}  questionsCount={questionsCount} onTryAgain={onTryAgain}/>
    )
}


export default ResultsContainer