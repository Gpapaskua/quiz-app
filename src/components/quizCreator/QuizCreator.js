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
    return (
        <CreateQuizPage>
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
                <StartButton onClick={handleSubmit}>Start</StartButton>
            </QuizForm>
        </CreateQuizPage >
    )
}





export default QuizCreator;