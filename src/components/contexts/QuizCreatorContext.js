import { createContext, useContext, useState } from "react";


export const QuizContext = createContext()
export const QuizData = createContext()

export function useQuizCreator(){
    return useContext(QuizContext)
}

export const QuizContextProvider = ({children}) => {
    const [questionsCount, setQuestionsCount] = useState(10)
    const [difficulty, setDifficulty] = useState('easy')
    const [categoryId, setCategoryId] = useState('')

    return(
        <QuizContext.Provider value={{questionsCount, difficulty, categoryId, setQuestionsCount, setDifficulty, setCategoryId}} >
            {children}
        </QuizContext.Provider>
    )
}