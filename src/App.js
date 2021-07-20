import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuizContainer from './components/containers/QuizContainer';
import QuizCreatorContainer from './components/containers/QuizCreatorContainer';
import ResultsContainer from './components/containers/ResultsContainer';
import { QuizContextProvider } from './components/contexts/QuizCreatorContext';
import { AppContent } from './components/quiz/QuizStyles';



const App = () => {
  return (
    <AppContent>
      <QuizContextProvider>    
          <Router>
        <Route exact render={() => <QuizCreatorContainer />} path={"/"} />
        <Route render={() => <QuizContainer />} path={"/quiz"} />
        <Route render={() => <ResultsContainer />} path={"/results"} />
      </Router>
      </QuizContextProvider>

    </AppContent>
  );
}

export default App;
