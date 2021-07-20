import { createContext, useContext, useState } from "react";


export const QuizContext = createContext()


export function useQuizCreator(){
    return useContext(QuizContext)
}

export const QuizContextProvider = ({children}) => {
    const [questionsCount, setQuestionsCount] = useState(10)
    const [difficulty, setDifficulty] = useState('easy')
    const [categoryId, setCategoryId] = useState('')
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [incorrectAnswers, setIncorrectAnswers] = useState(0)
    function checkAnswer(correctAnswer, clickedAnswer){
        if(correctAnswer === clickedAnswer){
            setCorrectAnswers(correctAnswers+1)
        }
        else{
            setIncorrectAnswers(incorrectAnswers+1)
        }
    }
    function resetAnswers(){
            setCorrectAnswers(0);
            setIncorrectAnswers(0);
    }
    return(
        <QuizContext.Provider value={{questionsCount, difficulty, categoryId, correctAnswers, resetAnswers, setCorrectAnswers,
            incorrectAnswers, setIncorrectAnswers, setQuestionsCount, setDifficulty, setCategoryId, checkAnswer}} >
            {children}
        </QuizContext.Provider>
    )
}