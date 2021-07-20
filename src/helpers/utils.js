import  { useState, useEffect } from 'react'

export function useQuizData({currentQuiz, questionsCount, categoryId, difficulty}) {
    const [quiz, setQuiz] = useState()
    useEffect(() => {
        if(currentQuiz){
            setQuiz(currentQuiz)
        }
        else{
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
    }
    }, [])
    

    return quiz
}

export function useAllAnswers(answers, correctAnswer) {
    const [allAnswers, setAllAnswers] = useState([])
    useEffect(() => {
        const ans = ([...answers, correctAnswer])
        setAllAnswers(shuffle(ans))
    }, [answers])
    

    return allAnswers
}

export function useCategories() {
    const [categories, setCategories] = useState()
    useEffect(() => {
        fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            setCategories(data.trivia_categories)
        })
    }, [])

    return categories
}

export const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}