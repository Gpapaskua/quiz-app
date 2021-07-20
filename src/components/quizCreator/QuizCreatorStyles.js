import styled from 'styled-components'

export const QuizForm = styled.div`
    width: 40%;
    min-height: 80vh;
    margin: 0 auto;
    background: #fff;
    border-radius: 0.7rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    @media screen and (max-width: 700px){
        width: 90%;
    }
`

export const QuizSelect = styled.select`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    padding: 1rem 0.5rem;
    border: none;
    margin: 0;
    border-radius: 0.6rem;
    outline: none;
    text-transform: capitalize;
    font-size: 1rem;
    background: #ddd;
    &:hover{
        cursor: pointer;
    }
`
export const StartButton = styled.button`
    padding: 0.6rem;
    width: 30%;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    cursor: pointer;
    background: #FFD194;
    color: #181818;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding: 0.8rem 0;
    &:hover{
        background: #FFFB7D;
        color: #2c3e50;
        
    }
`
export const Heading = styled.h2`
    text-align: center;
    letter-spacing: 0.2rem;
`