import styled from "styled-components"

export const QuizPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const QuizBox = styled.div`
   -webkit-box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.85); 
    box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.85);
    background: #e6dada;
    border-radius: 0.3rem;
    height: 90vh;
    width: 50%;
    @media (max-width: 768px) {
    width: 90%;
  }
    
`
export const AnswersBox = styled.div`
    display: flex;
    height: 40vh;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 5rem 0 0 0;
    @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`

export const Question = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 2rem 1rem 2rem 1.7rem;
    
`
