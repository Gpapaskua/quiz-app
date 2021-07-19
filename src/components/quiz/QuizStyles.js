import styled from "styled-components"

export const QuizPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const QuizBox = styled.div`
    background: #fff;
    border-radius: 0.2rem;
    min-height: 60vh;
    width: 50%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
    width: 90%;
  }
    
`
export const AnswersBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`

export const Question = styled.p`
    width: 80%;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 3.5rem;
    
`
