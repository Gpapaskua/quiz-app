import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ResultsPage = styled.div`
width: 100%;

`

export const ResultsBox = styled.div`
width: 50%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 3rem auto;
-webkit-box-shadow: 0px 6px 14px 5px #1CB0FF; 
box-shadow: 0px 6px 14px 5px #1CB0FF;
background: #00dbde;
border-radius: 0.4rem;
@media (max-width: 768px) {
width: 90%;
height: 80vh;
}
`
export const ResultItems = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
justify-content: space-between;
font-size: 1.5rem;
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
text-align: center;
background: #85FFBD;
width: 50%;
margin: 1rem auto;
padding: 0.8rem 0;
text-decoration: none;
color: #000;
text-transform: uppercase;
border-radius: 0.5rem;
&:hover{
    background: #FFFB7D;
    color: red;
}
`