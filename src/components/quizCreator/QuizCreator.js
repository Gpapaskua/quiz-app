import React from 'react'
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'

const QuizCreator = (props) => {
    let handleQuestionsChange = (e) => {
        props.changeQuestionsCount(e.target.value);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        props.quizStarted();

    }
    let changeCategory = (e) => {
        props.changeCategoryId(e.target.value)
    }
    let changeDifficulty = (e) => {
        props.changeDifficulty(e.target.value)
    }
    let changeQuizType = (e) => {
        console.log(e.target.value)
        props.changeQuizType(e.target.value)
    }
    return (
        <CreateQuizPage>
            {props.isQuizStarted && <Redirect to={"/quiz"} />}
            <QuizForm onSubmit={handleSubmit}>
                <Heading>Choose Quiz</Heading>
                <label>Choose questions count</label>
                <NumberInput type="number" min={10} max={30}
                    value={!props.question ? 10 : props.question} onChange={handleQuestionsChange} />
                <label>Choose category</label>
                <QuizSelect onChange={changeCategory}>
                    {props.categories.length === 0 ? <option value={"any category"}>any category</option>
                        : props.categories.map(category => {
                            return <option key={category.id} value={category.id} >{category.name}</option>
                        })}
                </QuizSelect>
                <label>Choose difficulty</label>
                <QuizSelect onChange={changeDifficulty} value={props.difficulty}>
                    <option value={"easy"}>easy</option>
                    <option value={"medium"}>medium</option>
                    <option value={"hard"}>hard</option>
                </QuizSelect>
                <label>Choose type</label>
                <QuizSelect onChange={changeQuizType} value={props.quizType}>
                    <option value={""}>Any type</option>
                    <option value={"boolean"}>True / False</option>
                    <option value={"multiple"}>Multiple choice</option>
                </QuizSelect>
                <StartButton onClick={handleSubmit}>Start</StartButton>
            </QuizForm>
        </CreateQuizPage >
    )
}

const CreateQuizPage = styled.div`
   width: 50%;
   margin: 0 auto;
   height: 100vh;
   @media (max-width: 768px) {
    width: 90%;
  }
`
const QuizForm = styled.form`
    width: 90%;
    height: 90vh;
    margin: 0 auto;
    background: #00dbde;
    border-radius: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
   

`

const NumberInput = styled.input`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    width: 50%;
    text-align: center;
    padding: 0.6rem;
    border: none;
    border-radius: 0.6rem;
    outline: none;
`
const QuizSelect = styled.select`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    padding: 0.5rem;
    border: none;
    margin: 0;
    border-radius: 0.6rem;
    outline: none;
    text-transform: capitalize;
`
const StartButton = styled.button`
    padding: 0.6rem;
    width: 50%;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    cursor: pointer;
    background: #FFD194;
    color: #181818;
    text-transform: uppercase;
    
    &:hover{
        background: #FFFB7D;
        color: #2c3e50;
        
    }
`
const Heading = styled.h2`
    text-align: center;
    letter-spacing: 0.2rem;
`



export default QuizCreator;