import { useCategories } from '../../helpers/utils'
import { useQuizCreator } from '../contexts/QuizCreatorContext'
import {  useHistory } from 'react-router-dom'
import QuizCreator from '../quizCreator/QuizCreator'


const QuizCreatorContainer = (props) => {
    const categories = useCategories()
    const {questionsCount, difficulty, categoryId, setQuestionsCount, setDifficulty, setCategoryId} = useQuizCreator()
    const history = useHistory()
    const handleSubmit = () => {
        history.push('/quiz')
        
    }
            return(
           <QuizCreator questionsCount={questionsCount} difficulty={difficulty} categoryId={categoryId}
           setQuestionsCount={setQuestionsCount} setDifficulty={setDifficulty} setCategoryId={setCategoryId}
           handleSubmit={handleSubmit} categories={categories}/>
            )
}



export default QuizCreatorContainer