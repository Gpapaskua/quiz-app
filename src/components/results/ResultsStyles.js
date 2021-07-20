import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QuizButton } from '../quiz/QuizStyles'

export const ResultsPage = styled.div`
width: 100%;

`

export const ResultsBox = styled.div`
    width: 50%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin: 3rem auto;
    background: #fff;
    border-radius: 0.2rem;
    @media (max-width: 768px) {
        width: 90%;
        height: 80vh;
    }
`
export const ResultItems = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.3rem;
    padding: 0.7rem 0.3rem;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const QuizHeader = styled.h2`
font-size: 1.5rem;
font-weight: 500;
text-transform: capitalize;
letter-spacing: 0.1rem;
text-align: center;
`
export const AnswerResults = styled.span`
text-transform: capitalize;
color: ${props => props.correctAnswer ? "green" : "red"} ;


`
export const NewQuiz = styled(Link)`
    width: 30%;
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background: ${props => props.disabled ? '#ddd' : '#0f0c29'};
    padding: 0.6rem 0;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 0.2rem;
    &:hover, :focus{
      background: #302b63;
    }
    
    @media (max-width: 768px) {
    width: 80%;
    }
`