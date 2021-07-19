import  { useState, useEffect } from 'react'
import { shuffle } from '../../helpers/shuffle'

export function useAllAnswers(answers, correctAnswer) {
    const [allAnswers, setAllAnswers] = useState([])
    useEffect(() => {
        const ans = ([...answers, correctAnswer])
        setAllAnswers(shuffle(ans))
    }, [])
    

    return allAnswers
}
