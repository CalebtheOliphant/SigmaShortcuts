import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MathJax from 'react-mathjax';

function Expression({startingExpression = ''}) {

  const [expression, setExpression] = useState(startingExpression);
  var currentExpression = startingExpression;
  var modes = 0;
  var numerModes = [];
  var matrixMode = -1;
  var ispmatrix = false;

  

  const handleKeyPress = useCallback((event) => {
    event.preventDefault()
    currentExpression = currentExpression.slice(0, currentExpression.length - (3 * modes + numerModes.length * 6));
    if(matrixMode >= 0) {
      currentExpression = currentExpression.slice(0, currentExpression.length - 12)
    }

    if (event.altKey) {
      if (event.key === "a") {
        currentExpression += ' \\alpha '
      }
      if (event.key === "b") {
        currentExpression += ' \\beta '
      }
      if (event.key === "y") {
        currentExpression += ' \\gamma '
      }
      if (event.key === "d") {
        currentExpression += ' \\delta '
      }
      if (event.key === "e") {
        currentExpression += ' \\epsilon '
      }
      if (event.key === "Z") {
        currentExpression += ' \\zeta '
      }
      if (event.key === "n") {
        currentExpression += ' \\eta '
      }
      if (event.key === "q") {
        currentExpression += ' \\theta '
      }
      if (event.key === "I") {
        currentExpression += ' \\iota '
      }
      if (event.key === "k") {
        currentExpression += ' \\kappa '
      }
      if (event.key === "l") {
        currentExpression += ' \\lambda '
      }
      if (event.key === "m") {
        currentExpression += ' \\mu '
      }
      if (event.key === "&") {
        currentExpression += ' \\nu '
      }
      if (event.key === "j") {
        currentExpression += ' \\xi '
      }
      if (event.key === "g") {
        currentExpression += ' \\pi '
      }
      if (event.key === "p") {
        currentExpression += ' \\rho '
      }
      if (event.key === "s") {
        currentExpression += ' \\sigma '
      }
      if (event.key === "t") {
        currentExpression += ' \\tau '
      }
      if (event.key === "u") {
        currentExpression += ' \\upsilon '
      }
      if (event.key === "f") {
        currentExpression += ' \\phi '
      }
      if (event.key === "x") {
        currentExpression += ' \\chi '
      }
      if (event.key === "5") {
        currentExpression += ' \\psi '
      }
      if (event.key === "o") {
        currentExpression += ' \\omega '
      }
      if (event.key === "Y") {
        currentExpression += ' \\Gamma '
      }
      if (event.key === "D") {
        currentExpression += ' \\Delta '
      }
      if (event.key === "Q") {
        currentExpression += ' \\Theta '
      }
      if (event.key === "L") {
        currentExpression += ' \\Lambda '
      }
      if (event.key === "J") {
        currentExpression += ' \\Xi '
      }
      if (event.key === "S") {
        currentExpression += ' \\Sigma '
      }
      if (event.key === "U") {
        currentExpression += ' \\Upsilon '
      }
      if (event.key === "F") {
        currentExpression += ' \\Phi '
      }
      if (event.key === "%") {
        currentExpression += ' \\Psi '
      }
      if (event.key === "O") {
        currentExpression += ' \\Omega '
      }
      if (event.key === ",") {
        currentExpression += ' \\leq '
      }
      if (event.key === ".") {
        currentExpression += ' \\geq '
      }
      if (event.key === "=") {
        currentExpression += ' \\neq '
      }
      if (event.key === "9") {
        currentExpression += ' \\subset '
      }
      if (event.key === "0") {
        currentExpression += ' \\supset '
      }
      if (event.key === "+") {
        currentExpression += ' \\equiv '
      }
      if (event.key === "1") {
        currentExpression += ' \\in '
      }
      if (event.key === "!") {
        currentExpression += ' \\notin '
      }
      if (event.key === "(") {
        currentExpression += ' \\subseteq '
      }
      if (event.key === ")") {
        currentExpression += ' \\supseteq '
      }
      if (event.key === "h") {
        currentExpression += ' \\parallel '
      }
      if (event.key === "H") {
        currentExpression += ' \\perp '
      }
      if (event.key === "`") {
        currentExpression += ' \\approx '
      }
      if (event.key === "-") {
        currentExpression += ' \\pm '
      }
      if (event.key === "R") {
        currentExpression += ' \\cdot '
      }
      if (event.key === "\\") {
        currentExpression += ' \\div '
      }
      if (event.key === "X") {
        currentExpression += ' \\times '
      }
      if (event.key === "c") {
        currentExpression += ' \\cup '
      }
      if (event.key === "2") {
        currentExpression += ' \\cap '
      }
      if (event.key === "v") {
        currentExpression += ' \\vee '
      }
      if (event.key === "4") {
        currentExpression += ' \\wedge '
      }
      if (event.key === "C") {
        currentExpression += ' \\bigcup '
      }
      if (event.key === "@") {
        currentExpression += ' \\bigcap '
      }
      if (event.key === "i") {
        currentExpression += ' \\int '
      }
      if (event.key === "G") {
        currentExpression += ' \\prod '
      }
      if (event.key === "V") {
        currentExpression += ' \\bigvee '
      }
      if (event.key === "$") {
        currentExpression += ' \\bigwedge '
      }
      if (event.key === "<") {
        currentExpression += ' \\gets '
      }
      if (event.key === ">") {
        currentExpression += ' \\to '
      }
      if (event.key === "?") {
        currentExpression += ' \\leftrightarrow '
      }
      if (event.key === "w") {
        currentExpression += ' \\uparrow '
      }
      if (event.key === "W") {
        currentExpression += ' \\downarrow '
      }
      if (event.key === "B") {
        currentExpression += ' \\cdots '
      }
      if (event.key === "M") {
        currentExpression += ' \\vdots '
      }
      if (event.key === "N") {
        currentExpression += ' \\ddots '
      }
      if (event.key === "A") {
        currentExpression += ' \\forall '
      }
      if (event.key === "E") {
        currentExpression += ' \\exists '
      }
      if (event.key === "6") {
        currentExpression += ' \\partial '
      }
      if (event.key === "8") {
        currentExpression += ' \\infty '
      }
      if (event.key === ";") {
        currentExpression += ' \\emptyset '
      }
      if (event.key === ":") {
        currentExpression += ' \\neg '
      }
      if (event.key === "^") {
        currentExpression += ' \\hat{ '
        modes++;
      }
      if (event.key === "_") {
        currentExpression += ' \\bar{ '
        modes++;
      }
      if (event.key === "#") {
        currentExpression += ' \\vec{ '
        modes++;
      }
      if (event.key === "*") {
        currentExpression += ' \\dot{ '
        modes++;
      }
      if (event.key === "~") {
        currentExpression += ' \\tilde{ '
        modes++;
      }
      if (event.key === "7") {
        currentExpression += ' \\sqrt{ '
        modes++;
      }
      if (event.key === "/") {
        currentExpression += ' \\frac{ ';
        numerModes.push(modes);
        modes++;
      }
      if (event.key === "[" && matrixMode == -1) {
        currentExpression += '\\begin{bmatrix}'
        matrixMode = modes;
        ispmatrix = false;
        modes++;
      }
      if (event.key === "]" && matrixMode == -1) {
        currentExpression += '\\begin{pmatrix}'
        matrixMode = modes;
        ispmatrix = true;
        modes++;
      }


    } else {
      if (event.key === "a") {
        currentExpression += ' a '
      }
      if (event.key === "b") {
        currentExpression += ' b '
      }
      if (event.key === "y") {
        currentExpression += ' y '
      }
      if (event.key === "d") {
        currentExpression += ' d '
      }
      if (event.key === "e") {
        currentExpression += ' e '
      }
      if (event.key === "Z") {
        currentExpression += ' z '
      }
      if (event.key === "n") {
        currentExpression += ' n '
      }
      if (event.key === "q") {
        currentExpression += ' q '
      }
      if (event.key === "I") {
        currentExpression += ' I '
      }
      if (event.key === "k") {
        currentExpression += ' k '
      }
      if (event.key === "l") {
        currentExpression += ' l '
      }
      if (event.key === "m") {
        currentExpression += ' m '
      }
      if (event.key === "&") {
        currentExpression += ' & '
      }
      if (event.key === "j") {
        currentExpression += ' j '
      }
      if (event.key === "g") {
        currentExpression += ' g '
      }
      if (event.key === "p") {
        currentExpression += ' p '
      }
      if (event.key === "s") {
        currentExpression += ' s '
      }
      if (event.key === "t") {
        currentExpression += ' t '
      }
      if (event.key === "u") {
        currentExpression += ' u '
      }
      if (event.key === "f") {
        currentExpression += ' f '
      }
      if (event.key === "x") {
        currentExpression += ' x '
      }
      if (event.key === "5") {
        currentExpression += ' 5 '
      }
      if (event.key === "o") {
        currentExpression += ' o '
      }
      if (event.key === "Y") {
        currentExpression += ' Y '
      }
      if (event.key === "D") {
        currentExpression += ' D '
      }
      if (event.key === "Q") {
        currentExpression += ' Q '
      }
      if (event.key === "L") {
        currentExpression += ' L '
      }
      if (event.key === "J") {
        currentExpression += ' J '
      }
      if (event.key === "S") {
        currentExpression += ' S '
      }
      if (event.key === "U") {
        currentExpression += ' U '
      }
      if (event.key === "F") {
        currentExpression += ' F '
      }
      if (event.key === "%") {
        currentExpression += ' % '
      }
      if (event.key === "O") {
        currentExpression += ' O '
      }
      if (event.key === ",") {
        currentExpression += ' , '
      }
      if (event.key === ".") {
        currentExpression += ' . '
      }
      if (event.key === "=") {
        currentExpression += ' = '
      }
      if (event.key === "9") {
        currentExpression += ' 9 '
      }
      if (event.key === "0") {
        currentExpression += ' 0 '
      }
      if (event.key === "+") {
        currentExpression += ' + '
      }
      if (event.key === "1") {
        currentExpression += ' 1 '
      }
      if (event.key === "!") {
        currentExpression += ' ! '
      }
      if (event.key === "(") {
        currentExpression += ' ( '
      }
      if (event.key === ")") {
        currentExpression += ' ) '
      }
      if (event.key === "h") {
        currentExpression += ' h '
      }
      if (event.key === "H") {
        currentExpression += ' H '
      }
      if (event.key === "`") {
        currentExpression += ' ` '
      }
      if (event.key === "-") {
        currentExpression += ' - '
      }
      if (event.key === "R") {
        currentExpression += ' R '
      }
      if (event.key === "\\") {
        currentExpression += ' \\ '
      }
      if (event.key === "X") {
        currentExpression += ' X '
      }
      if (event.key === "c") {
        currentExpression += ' c '
      }
      if (event.key === "2") {
        currentExpression += ' 2 '
      }
      if (event.key === "v") {
        currentExpression += ' v '
      }
      if (event.key === "4") {
        currentExpression += ' 4 '
      }
      if (event.key === "C") {
        currentExpression += ' C '
      }
      if (event.key === "@") {
        currentExpression += ' @ '
      }
      if (event.key === "i") {
        currentExpression += ' i '
      }
      if (event.key === "G") {
        currentExpression += ' G '
      }
      if (event.key === "V") {
        currentExpression += ' V '
      }
      if (event.key === "$") {
        currentExpression += ' $ '
      }
      if (event.key === "<") {
        currentExpression += ' < '
      }
      if (event.key === ">") {
        currentExpression += ' > '
      }
      if (event.key === "?") {
        currentExpression += ' ? '
      }
      if (event.key === "w") {
        currentExpression += ' w '
      }
      if (event.key === "W") {
        currentExpression += ' W '
      }
      if (event.key === "B") {
        currentExpression += ' B '
      }
      if (event.key === "M") {
        currentExpression += ' M '
      }
      if (event.key === "N") {
        currentExpression += ' N '
      }
      if (event.key === "A") {
        currentExpression += ' A '
      }
      if (event.key === "E") {
        currentExpression += ' E '
      }
      if (event.key === "6") {
        currentExpression += ' 6 '
      }
      if (event.key === "8") {
        currentExpression += ' 8 '
      }
      if (event.key === ";") {
        currentExpression += ' ; '
      }
      if (event.key === ":") {
        currentExpression += ' : '
      }
      if (event.key === "~") {
        currentExpression += ' ~ '
      }
      if (event.key === "3") {
        currentExpression += ' 3 '
      }
      if (event.key === "#") {
        currentExpression += ' # '
      }
      if (event.key === "^") {
        modes++;
        currentExpression += ' ^{ '
      }
      if (event.key === "7") {
        currentExpression += ' 7 '
      }
      if (event.key === "*") {
        currentExpression += ' * '
      }
      if (event.key === "_") {
        modes++;
        currentExpression += ' _{ '
      }
      if (event.key === "r") {
        currentExpression += ' r '
      }
      if (event.key === "T") {
        currentExpression += ' T '
      }
      if (event.key === "{") {
        currentExpression += ' \\{ '
      }
      if (event.key === "}") {
        currentExpression += ' \\} '
      }
      if (event.key === "[") {
        currentExpression += ' [ '
      }
      if (event.key === "]") {
        currentExpression += ' ] '
      }
      if (event.key === "|") {
        currentExpression += ' | '
      }
      if (event.key === "\\") {
        currentExpression += ' \\ '
      }
      if (event.key === "K") {
        currentExpression += ' K '
      }
      if (event.key === "'") {
        currentExpression += ' \' '
      }
      if (event.key === "\"") {
        currentExpression += ' " '
      }
      if (event.key === "z") {
        currentExpression += ' z '
      }
      if (event.key === "/") {
        currentExpression += ' / '
      }
      if(event.key === " " && matrixMode == modes - 1) {
        currentExpression += " & "
      }
      if (event.key == "Tab" && matrixMode == modes - 1) {
        currentExpression += " \\\\ "
      }
    }
    
    for( var i = modes - 1; i >= 0; i--) {
      if(numerModes.includes(i)) {
        currentExpression += ' }  {  } '
      } else if (i == matrixMode) {
       if (ispmatrix) {
        currentExpression += ' \\end{pmatrix} ' 
       } else {
        currentExpression += ' \\end{bmatrix} ' 
       }
      } else {
        currentExpression += ' } '
      }
    }

    if (event.key === "Enter") {
      modes--;
      if(numerModes.includes(modes)) {
        numerModes.pop(numerModes.indexOf(modes));
        modes++;
      }
      if(modes == matrixMode) {
        matrixMode =  -1;
      }
    }
    setExpression(currentExpression);
    //TODO: Deleting, editing with the arrow keys, indicating where user is, creating a new expression with copyability. 
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

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

function Keyboard() {
  const [keyboard, setKeyboard] = useState("nonesmall.png");
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.shiftKey) {
        setKeyboard("altshiftsmall.png");
      } else if (event.key === 'Alt') {
        setKeyboard("altsmall.png");
      } else if (event.key === 'Shift') {
        setKeyboard("shiftsmall.png");
      }
    };

    const handleKeyUp = (event) => {
      if (keyboard === "altshiftsmall.png") {
        if(event.key === "Alt") {
          setKeyboard("shiftsmall.png")
        } 
        else if(event.key === "Shift") {
          setKeyboard("altsmall.png")
        }
      } 
      else {
      if(event.key === "Shift" || event.key == "Alt")
        setKeyboard("nonesmall.png");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keyboard]);

  return (
    <div>
      <p>
      </p>
    <img src={keyboard} alt={keyboard} />
  </div>
  )
}

function App() {

  return (
    <div className="App"> 
    <Keyboard />
    <Expression />
    </div>
  );
}

export default App;
