import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MathJax from 'react-mathjax';

function Expression({startingExpression = ''}) {

  const [expression, setExpression] = useState(startingExpression);
  var currentExpression = startingExpression;

  const handleKeyPress = useCallback(() => {
    currentExpression += '\\int_0^\\infty x^2 dx';
    setExpression(currentExpression);
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <MathJax.Provider>
    <div>
      <MathJax.Node formula={expression} />
    </div>
  </MathJax.Provider>
  );
}

function App() {

  return (
    <div className="App"> 
    <Expression />
    </div>
  );
}

export default App;
