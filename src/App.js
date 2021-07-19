import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuizContainer from './components/containers/QuizContainer';
import QuizCreatorContainer from './components/containers/QuizCreatorContainer';
import ResultsContainer from './components/containers/ResultsContainer';
import { QuizContextProvider } from './components/contexts/QuizCreatorContext';



const App = () => {
  return (
    <div className="App">
      <QuizContextProvider>    
          <Router>
        <Route exact render={() => <QuizCreatorContainer />} path={"/"} />
        <Route render={() => <QuizContainer />} path={"/quiz"} />
        <Route render={() => <ResultsContainer />} path={"/results"} />
      </Router>
      </QuizContextProvider>

    </div>
  );
}

export default App;
