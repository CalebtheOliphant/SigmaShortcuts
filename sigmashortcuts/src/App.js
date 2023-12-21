import './App.css';
import MathJax from 'react-mathjax';

function App() {
  const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
  const blockFormula = `\\int_0^\\infty x^3 dx`;
  return (
    <div className="App"> 
    <MathJax.Provider>
      <div>
        <p>Inline formula: <MathJax.Node inline formula={inlineFormula} /></p>
        <hr></hr>
        <p>Block formula:</p>
        <MathJax.Node formula={blockFormula} />
      </div>
    </MathJax.Provider>
  </div>
  );
}

export default App;
