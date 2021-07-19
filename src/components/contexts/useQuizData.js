import  { useState, useEffect } from 'react'

export function useQuizData({questionsCount, categoryId, difficulty}) {
    const [quiz, setQuiz] = useState()
    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${questionsCount}&category=${categoryId}&difficulty=${difficulty}`)
        .then(response => {
            if(response.status === 200){
                return response.json()
            }
        })
        .then(data => {
            if(data.response_code === 0){
                setQuiz(data.results)
            }
        })
    }, [])

    return quiz
}