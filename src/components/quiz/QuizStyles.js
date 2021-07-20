import { Link } from "react-router-dom"
import styled from "styled-components"

export const AppContent = styled.main`
  background: linear-gradient(#0f0c29, #302b63, #24243e);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  background: #0f0c29;
  color: #fff;
  letter-spacing: 0.1rem;
  padding: 0.8rem;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  &:hover, :focus{
    background: #24243e;
  }
`

export const QuizBox = styled.div`
    background: #fff;
    border-radius: 0.2rem;
    min-height: 80vh;
    width: 50%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
    width: 90%;
    min-height: 90vh;
  }
    
`
export const QuizItem = styled.div`
  width: 90%;
  flex: 0.8;
  display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
export const QuizInfo = styled.div`
  width: 90%;
  display: flex; 
    align-items: center;
    justify-content: space-between;
    span{
      background: #302b63;
      padding: 0.7rem;
      color: #fff;
      border-radius: 0.2rem;
      span:nth-child(1){
        color: #00d945;
      }
      span:nth-child(2){
        color: red;
      }
    }
`
export const CorrectAnswer = styled.div`
  font-size: 1.3rem;
  color: #00d945;
  display: ${props => props.show ? 'flex' : 'none'};
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
      width: 80%;
  }
`
export const Answer = styled.button`
    font-size: 1rem;
    width: 90%;
    border: none;
    background:${props => props.disabled ? '#ddd' : '#302b63'};
    color: #fff;
    padding: 1rem 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover, :focus{
        outline: none;
        cursor: pointer;
        opacity: 0.8;
        color: #fff;
        transform: scale(1.02);
    }
    @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`

export const Question = styled.p`
    width: 80%;
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 768px) {
    width: 80%;
}
    
`
export const QuizButton = styled.button`
    width: 30%;
    font-size: 1.2rem;
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
      background: ${props => props.disabled ? '#ddd' : '#302b63'};
    }
    
    @media (max-width: 768px) {
    width: 40%;
}
    
`
