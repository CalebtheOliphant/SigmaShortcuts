import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MathJax from 'react-mathjax';

function Expression({startingExpression = ''}) {

  const [expression, setExpression] = useState(startingExpression);
  var currentExpression = startingExpression;
  var matrix = false;

  

  const handleKeyPress = useCallback((event) => {
    var midIndex = currentExpression.indexOf('|')
    var front = currentExpression.slice(0, midIndex + 1);
    var back = currentExpression.slice(midIndex + 1, currentExpression.length);
    event.preventDefault()
    if (event.repeat) {
      return;
    }

    if (event.altKey) {
      if (event.key === "a") {
        front = front.slice(0, front.length - 1);
        front += ' \\alpha |'
      }
      if (event.key === "b") {
        front = front.slice(0, front.length - 1);
        front += ' \\beta |'
      }
      if (event.key === "y") {
        front = front.slice(0, front.length - 1);
        front += ' \\gamma |'
      }
      if (event.key === "d") {
        front = front.slice(0, front.length - 1);
        front += ' \\delta |'
      }
      if (event.key === "e") {
        front = front.slice(0, front.length - 1);
        front += ' \\epsilon |'
      }
      if (event.key === "Z") {
        front = front.slice(0, front.length - 1);
        front += ' \\zeta |'
      }
      if (event.key === "n") {
        front = front.slice(0, front.length - 1);
        front += ' \\eta |'
      }
      if (event.key === "q") {
        front = front.slice(0, front.length - 1);
        front += ' \\theta |'
      }
      if (event.key === "I") {
        front = front.slice(0, front.length - 1);
        front += ' \\iota |'
      }
      if (event.key === "k") {
        front = front.slice(0, front.length - 1);
        front += ' \\kappa |'
      }
      if (event.key === "l") {
        front = front.slice(0, front.length - 1);
        front += ' \\lambda |'
      }
      if (event.key === "m") {
        front = front.slice(0, front.length - 1);
        front += ' \\mu |'
      }
      if (event.key === "&") {
        front = front.slice(0, front.length - 1);
        front += ' \\nu |'
      }
      if (event.key === "j") {
        front = front.slice(0, front.length - 1);
        front += ' \\xi |'
      }
      if (event.key === "g") {
        front = front.slice(0, front.length - 1);
        front += ' \\pi |'
      }
      if (event.key === "p") {
        front = front.slice(0, front.length - 1);
        front += ' \\rho |'
      }
      if (event.key === "s") {
        front = front.slice(0, front.length - 1);
        front += ' \\sigma |'
      }
      if (event.key === "t") {
        front = front.slice(0, front.length - 1);
        front += ' \\tau |'
      }
      if (event.key === "u") {
        front = front.slice(0, front.length - 1);
        front += ' \\upsilon |'
      }
      if (event.key === "f") {
        front = front.slice(0, front.length - 1);
        front += ' \\phi |'
      }
      if (event.key === "x") {
        front = front.slice(0, front.length - 1);
        front += ' \\chi |'
      }
      if (event.key === "5") {
        front = front.slice(0, front.length - 1);
        front += ' \\psi |'
      }
      if (event.key === "o") {
        front = front.slice(0, front.length - 1);
        front += ' \\omega |'
      }
      if (event.key === "Y") {
        front = front.slice(0, front.length - 1);
        front += ' \\Gamma |'
      }
      if (event.key === "D") {
        front = front.slice(0, front.length - 1);
        front += ' \\Delta |'
      }
      if (event.key === "Q") {
        front = front.slice(0, front.length - 1);
        front += ' \\Theta |'
      }
      if (event.key === "L") {
        front = front.slice(0, front.length - 1);
        front += ' \\Lambda |'
      }
      if (event.key === "J") {
        front = front.slice(0, front.length - 1);
        front += ' \\Xi |'
      }
      if (event.key === "S") {
        front = front.slice(0, front.length - 1);
        front += ' \\Sigma |'
      }
      if (event.key === "U") {
        front = front.slice(0, front.length - 1);
        front += ' \\Upsilon |'
      }
      if (event.key === "F") {
        front = front.slice(0, front.length - 1);
        front += ' \\Phi |'
      }
      if (event.key === "%") {
        front = front.slice(0, front.length - 1);
        front += ' \\Psi |'
      }
      if (event.key === "O") {
        front = front.slice(0, front.length - 1);
        front += ' \\Omega |'
      }
      if (event.key === ",") {
        front = front.slice(0, front.length - 1);
        front += ' \\leq |'
      }
      if (event.key === ".") {
        front = front.slice(0, front.length - 1);
        front += ' \\geq |'
      }
      if (event.key === "=") {
        front = front.slice(0, front.length - 1);
        front += ' \\neq |'
      }
      if (event.key === "9") {
        front = front.slice(0, front.length - 1);
        front += ' \\subset |'
      }
      if (event.key === "0") {
        front = front.slice(0, front.length - 1);
        front += ' \\supset |'
      }
      if (event.key === "+") {
        front = front.slice(0, front.length - 1);
        front += ' \\equiv |'
      }
      if (event.key === "1") {
        front = front.slice(0, front.length - 1);
        front += ' \\in |'
      }
      if (event.key === "!") {
        front = front.slice(0, front.length - 1);
        front += ' \\notin |'
      }
      if (event.key === "(") {
        front = front.slice(0, front.length - 1);
        front += ' \\subseteq |'
      }
      if (event.key === ")") {
        front = front.slice(0, front.length - 1);
        front += ' \\supseteq |'
      }
      if (event.key === "h") {
        front = front.slice(0, front.length - 1);
        front += ' \\parallel |'
      }
      if (event.key === "H") {
        front = front.slice(0, front.length - 1);
        front += ' \\perp |'
      }
      if (event.key === "`") {
        front = front.slice(0, front.length - 1);
        front += ' \\approx |'
      }
      if (event.key === "-") {
        front = front.slice(0, front.length - 1);
        front += ' \\pm |'
      }
      if (event.key === "R") {
        front = front.slice(0, front.length - 1);
        front += ' \\cdot |'
      }
      if (event.key === "\\") {
        front = front.slice(0, front.length - 1);
        front += ' \\div |'
      }
      if (event.key === "X") {
        front = front.slice(0, front.length - 1);
        front += ' \\times |'
      }
      if (event.key === "c") {
        front = front.slice(0, front.length - 1);
        front += ' \\cup |'
      }
      if (event.key === "2") {
        front = front.slice(0, front.length - 1);
        front += ' \\cap |'
      }
      if (event.key === "v") {
        front = front.slice(0, front.length - 1);
        front += ' \\vee |'
      }
      if (event.key === "4") {
        front = front.slice(0, front.length - 1);
        front += ' \\wedge |'
      }
      if (event.key === "C") {
        front = front.slice(0, front.length - 1);
        front += ' \\bigcup |'
      }
      if (event.key === "@") {
        front = front.slice(0, front.length - 1);
        front += ' \\bigcap |'
      }
      if (event.key === "i") {
        front = front.slice(0, front.length - 1);
        front += ' \\int |'
      }
      if (event.key === "G") {
        front = front.slice(0, front.length - 1);
        front += ' \\prod |'
      }
      if (event.key === "V") {
        front = front.slice(0, front.length - 1);
        front += ' \\bigvee |'
      }
      if (event.key === "$") {
        front = front.slice(0, front.length - 1);
        front += ' \\bigwedge |'
      }
      if (event.key === "<") {
        front = front.slice(0, front.length - 1);
        front += ' \\gets |'
      }
      if (event.key === ">") {
        front = front.slice(0, front.length - 1);
        front += ' \\to |'
      }
      if (event.key === "?") {
        front = front.slice(0, front.length - 1);
        front += ' \\leftrightarrow |'
      }
      if (event.key === "w") {
        front = front.slice(0, front.length - 1);
        front += ' \\uparrow |'
      }
      if (event.key === "W") {
        front = front.slice(0, front.length - 1);
        front += ' \\downarrow |'
      }
      if (event.key === "B") {
        front = front.slice(0, front.length - 1);
        front += ' \\cdots |'
      }
      if (event.key === "M") {
        front = front.slice(0, front.length - 1);
        front += ' \\vdots |'
      }
      if (event.key === "N") {
        front = front.slice(0, front.length - 1);
        front += ' \\ddots |'
      }
      if (event.key === "A") {
        front = front.slice(0, front.length - 1);
        front += ' \\forall |'
      }
      if (event.key === "E") {
        front = front.slice(0, front.length - 1);
        front += ' \\exists |'
      }
      if (event.key === "6") {
        front = front.slice(0, front.length - 1);
        front += ' \\partial |'
      }
      if (event.key === "8") {
        front = front.slice(0, front.length - 1);
        front += ' \\infty |'
      }
      if (event.key === ";") {
        front = front.slice(0, front.length - 1);
        front += ' \\emptyset |'
      }
      if (event.key === ":") {
        front = front.slice(0, front.length - 1);
        front += ' \\neg |'
      }
      if (event.key === "^") {
        front = front.slice(0, front.length - 1);
        front += ' \\hat{ | } '
      }
      if (event.key === "_") {
        front = front.slice(0, front.length - 1);
        front += ' \\bar{ | } '
      }
      if (event.key === "#") {
        front = front.slice(0, front.length - 1);
        front += ' \\vec{ | } '
      }
      if (event.key === "*") {
        front = front.slice(0, front.length - 1);
        front += ' \\dot{ | } '
      }
      if (event.key === "~") {
        front = front.slice(0, front.length - 1);
        front += ' \\tilde{ | } '
      }
      if (event.key === "7") {
        front = front.slice(0, front.length - 1);
        front += ' \\sqrt{ | } '
      }
      if (event.key === "/") {
        front = front.slice(0, front.length - 1);
        front += ' \\frac{ | }{  } ';
      }
      if (event.key === "[" && !matrix) {
        front = front.slice(0, front.length - 1);
        front += ' \\begin{bmatrix} | \\end{bmatrix} '
        matrix = true;
      }
      if (event.key === "]" && !matrix) {
        front = front.slice(0, front.length - 1);
        front += ' \\begin{pmatrix} | \\end{pmatrix} '
        matrix = true;
      }


    } else {
      if (event.key === "a") {
        front = front.slice(0, front.length - 1);
        front += ' a |'
      }
      if (event.key === "b") {
        front = front.slice(0, front.length - 1);
        front += ' b |'
      }
      if (event.key === "y") {
        front = front.slice(0, front.length - 1);
        front += ' y |'
      }
      if (event.key === "d") {
        front = front.slice(0, front.length - 1);
        front += ' d |'
      }
      if (event.key === "e") {
        front = front.slice(0, front.length - 1);
        front += ' e |'
      }
      if (event.key === "Z") {
        front = front.slice(0, front.length - 1);
        front += ' z |'
      }
      if (event.key === "n") {
        front = front.slice(0, front.length - 1);
        front += ' n |'
      }
      if (event.key === "q") {
        front = front.slice(0, front.length - 1);
        front += ' q |'
      }
      if (event.key === "I") {
        front = front.slice(0, front.length - 1);
        front += ' I |'
      }
      if (event.key === "k") {
        front = front.slice(0, front.length - 1);
        front += ' k |'
      }
      if (event.key === "l") {
        front = front.slice(0, front.length - 1);
        front += ' l |'
      }
      if (event.key === "m") {
        front = front.slice(0, front.length - 1);
        front += ' m |'
      }
      if (event.key === "&") {
        front = front.slice(0, front.length - 1);
        front += ' & |'
      }
      if (event.key === "j") {
        front = front.slice(0, front.length - 1);
        front += ' j |'
      }
      if (event.key === "g") {
        front = front.slice(0, front.length - 1);
        front += ' g |'
      }
      if (event.key === "p") {
        front = front.slice(0, front.length - 1);
        front += ' p |'
      }
      if (event.key === "s") {
        front = front.slice(0, front.length - 1);
        front += ' s |'
      }
      if (event.key === "t") {
        front = front.slice(0, front.length - 1);
        front += ' t |'
      }
      if (event.key === "u") {
        front = front.slice(0, front.length - 1);
        front += ' u |'
      }
      if (event.key === "f") {
        front = front.slice(0, front.length - 1);
        front += ' f |'
      }
      if (event.key === "x") {
        front = front.slice(0, front.length - 1);
        front += ' x |'
      }
      if (event.key === "5") {
        front = front.slice(0, front.length - 1);
        front += ' 5 |'
      }
      if (event.key === "o") {
        front = front.slice(0, front.length - 1);
        front += ' o |'
      }
      if (event.key === "Y") {
        front = front.slice(0, front.length - 1);
        front += ' Y |'
      }
      if (event.key === "D") {
        front = front.slice(0, front.length - 1);
        front += ' D |'
      }
      if (event.key === "Q") {
        front = front.slice(0, front.length - 1);
        front += ' Q |'
      }
      if (event.key === "L") {
        front = front.slice(0, front.length - 1);
        front += ' L |'
      }
      if (event.key === "J") {
        front = front.slice(0, front.length - 1);
        front += ' J |'
      }
      if (event.key === "S") {
        front = front.slice(0, front.length - 1);
        front += ' S |'
      }
      if (event.key === "U") {
        front = front.slice(0, front.length - 1);
        front += ' U |'
      }
      if (event.key === "F") {
        front = front.slice(0, front.length - 1);
        front += ' F |'
      }
      if (event.key === "%") {
        front = front.slice(0, front.length - 1);
        front += ' \\% |'
      }
      if (event.key === "O") {
        front = front.slice(0, front.length - 1);
        front += ' O |'
      }
      if (event.key === ",") {
        front = front.slice(0, front.length - 1);
        front += ' , |'
      }
      if (event.key === ".") {
        front = front.slice(0, front.length - 1);
        front += ' . |'
      }
      if (event.key === "=") {
        front = front.slice(0, front.length - 1);
        front += ' = |'
      }
      if (event.key === "9") {
        front = front.slice(0, front.length - 1);
        front += ' 9 |'
      }
      if (event.key === "0") {
        front = front.slice(0, front.length - 1);
        front += ' 0 |'
      }
      if (event.key === "+") {
        front = front.slice(0, front.length - 1);
        front += ' + |'
      }
      if (event.key === "1") {
        front = front.slice(0, front.length - 1);
        front += ' 1 |'
      }
      if (event.key === "!") {
        front = front.slice(0, front.length - 1);
        front += ' ! |'
      }
      if (event.key === "(") {
        front = front.slice(0, front.length - 1);
        front += ' ( |'
      }
      if (event.key === ")") {
        front = front.slice(0, front.length - 1);
        front += ' ) |'
      }
      if (event.key === "h") {
        front = front.slice(0, front.length - 1);
        front += ' h |'
      }
      if (event.key === "H") {
        front = front.slice(0, front.length - 1);
        front += ' H |'
      }
      if (event.key === "`") {
        front = front.slice(0, front.length - 1);
        front += ' ` |'
      }
      if (event.key === "-") {
        front = front.slice(0, front.length - 1);
        front += ' - |'
      }
      if (event.key === "R") {
        front = front.slice(0, front.length - 1);
        front += ' R |'
      }
      if (event.key === "\\") {
        front = front.slice(0, front.length - 1);
        front += ' \\ |'
      }
      if (event.key === "X") {
        front = front.slice(0, front.length - 1);
        front += ' X |'
      }
      if (event.key === "c") {
        front = front.slice(0, front.length - 1);
        front += ' c |'
      }
      if (event.key === "2") {
        front = front.slice(0, front.length - 1);
        front += ' 2 |'
      }
      if (event.key === "v") {
        front = front.slice(0, front.length - 1);
        front += ' v |'
      }
      if (event.key === "4") {
        front = front.slice(0, front.length - 1);
        front += ' 4 |'
      }
      if (event.key === "C") {
        front = front.slice(0, front.length - 1);
        front += ' C |'
      }
      if (event.key === "@") {
        front = front.slice(0, front.length - 1);
        front += ' @ |'
      }
      if (event.key === "i") {
        front = front.slice(0, front.length - 1);
        front += ' i |'
      }
      if (event.key === "G") {
        front = front.slice(0, front.length - 1);
        front += ' G |'
      }
      if (event.key === "V") {
        front = front.slice(0, front.length - 1);
        front += ' V |'
      }
      if (event.key === "$") {
        front = front.slice(0, front.length - 1);
        front += ' $ |'
      }
      if (event.key === "<") {
        front = front.slice(0, front.length - 1);
        front += ' < |'
      }
      if (event.key === ">") {
        front = front.slice(0, front.length - 1);
        front += ' > |'
      }
      if (event.key === "?") {
        front = front.slice(0, front.length - 1);
        front += ' ? |'
      }
      if (event.key === "w") {
        front = front.slice(0, front.length - 1);
        front += ' w |'
      }
      if (event.key === "W") {
        front = front.slice(0, front.length - 1);
        front += ' W |'
      }
      if (event.key === "B") {
        front = front.slice(0, front.length - 1);
        front += ' B |'
      }
      if (event.key === "M") {
        front = front.slice(0, front.length - 1);
        front += ' M |'
      }
      if (event.key === "N") {
        front = front.slice(0, front.length - 1);
        front += ' N |'
      }
      if (event.key === "A") {
        front = front.slice(0, front.length - 1);
        front += ' A |'
      }
      if (event.key === "E") {
        front = front.slice(0, front.length - 1);
        front += ' E |'
      }
      if (event.key === "6") {
        front = front.slice(0, front.length - 1);
        front += ' 6 |'
      }
      if (event.key === "8") {
        front = front.slice(0, front.length - 1);
        front += ' 8 |'
      }
      if (event.key === ";") {
        front = front.slice(0, front.length - 1);
        front += ' ; |'
      }
      if (event.key === ":") {
        front = front.slice(0, front.length - 1);
        front += ' : |'
      }
      if (event.key === "~") {
        front = front.slice(0, front.length - 1);
        front += ' ~ |'
      }
      if (event.key === "3") {
        front = front.slice(0, front.length - 1);
        front += ' 3 |'
      }
      if (event.key === "#") {
        front = front.slice(0, front.length - 1);
        front += ' \\# |'
      }
      if (event.key === "^") {
        front = front.slice(0, front.length - 1);
        front += ' ^{ | } '
      }
      if (event.key === "7") {
        front = front.slice(0, front.length - 1);
        front += ' 7 |'
      }
      if (event.key === "*") {
        front = front.slice(0, front.length - 1);
        front += ' * |'
      }
      if (event.key === "_") {
        front = front.slice(0, front.length - 1);
        front += ' _{ | } '  
      }
      if (event.key === "r") {
        front = front.slice(0, front.length - 1);
        front += ' r |'
      }
      if (event.key === "T") {
        front = front.slice(0, front.length - 1);
        front += ' T |'
      }
      if (event.key === "{") {
        front = front.slice(0, front.length - 1);
        front += ' \\{ |'
      }
      if (event.key === "}") {
        front = front.slice(0, front.length - 1);
        front += ' \\} |'
      }
      if (event.key === "[") {
        front = front.slice(0, front.length - 1);
        front += ' [ |'
      }
      if (event.key === "]") {
        front = front.slice(0, front.length - 1);
        front += ' ] |'
      }
      if (event.key === "|") {
        front = front.slice(0, front.length - 1);
        front += ' \\mid |'
      }
      if (event.key === "\\") {
        front = front.slice(0, front.length - 1);
        front += ' \\ |'
      }
      if (event.key === "K") {
        front = front.slice(0, front.length - 1);
        front += ' K |'
      }
      if (event.key === "'") {
        front = front.slice(0, front.length - 1);
        front += ' \' |'
      }
      if (event.key === "\"") {
        front = front.slice(0, front.length - 1);
        front += ' " |'
      }
      if (event.key === "z") {
        front = front.slice(0, front.length - 1);
        front += ' z |'
      }
      if (event.key === "/") {
        front = front.slice(0, front.length - 1);
        front += ' / |'
      }
      if(event.key === " " && matrix) {
        front = front.slice(0, front.length - 1);
        front += " & |"
      }
      if (event.key === "Tab" && matrix) {
        front = front.slice(0, front.length - 1);
        front += " \\\\ |"
      }
    }
    if(event.key == "Enter") {
      front = front.slice(0, front.length - 1);
      var firstBracket = back.indexOf("}");
      var skipBy = 2;
      if (back[firstBracket + 1] === "{") {
        skipBy = 3
      }
      if(back.slice(0, firstBracket + skipBy).indexOf("matrix") != -1) {
        matrix = false;
      }
      back = back.slice(0, firstBracket + skipBy) + "|" + back.slice(firstBracket + skipBy, back.length);
    }

    if(event.key == "Backspace") {
      front = front.slice(0, front.length - 1);
      var resversedFront = reverseString(front);
      var reversedDeleteTo = resversedFront.slice(resversedFront.indexOf(" ") + 1, resversedFront.length).indexOf(" ") + 1;
      var deleteTo = front.length - reversedDeleteTo;
      var SegmentToDelete = front.slice(deleteTo - 1, front.length);
      if(SegmentToDelete.indexOf("{") != -1) {
        if(back.indexOf("}{") == 1) {
          back = back.slice(back.indexOf("}{") + 2, back.length);
        }
        back = back.slice(back.indexOf("}") + 2, back.length);
      }
      front = front.slice(0, deleteTo - 1) + "|";
      if(SegmentToDelete.indexOf("}{") != -1) {
        front += " }{  } "
      } else if(SegmentToDelete.indexOf("begin") != -1) {
        back = back.slice(back.indexOf("begin") + 13, back.length)
        matrix = false;
      } else if(SegmentToDelete.indexOf("end") != -1) {
        back += " \\end{bmatrix} "
        matrix = true;
      } else if(SegmentToDelete.indexOf("}") != -1) {
        front += " } ";
      }
    }

    if(event.key === "ArrowLeft") {
      front = front.slice(0, front.length - 1);
      var resversedFront = reverseString(front);
      var reversedMoveTo = resversedFront.slice(resversedFront.indexOf(" ") + 1, resversedFront.length).indexOf(" ") + 1;
      var moveTo = front.length - reversedMoveTo;
      front = front.slice(0, moveTo - 1) + "|" + front.slice(moveTo - 1, front.length);
    }

    if(event.key === "ArrowRight") {
      front = front.slice(0, front.length - 1);
      var moveTo = back.slice(back.indexOf(" ") + 1, back.length).indexOf(" ") + 1;
      back = back.slice(0, moveTo + 1) + "|" + back.slice(moveTo + 1, back.length);
    }

    if(matrix) {
      document.getElementById("matrixNote").style.visibility = "visible";
    } else {
      document.getElementById("matrixNote").style.visibility = "hidden";
    }

    currentExpression = front + back;
    setExpression(currentExpression);
  }, []);

     
function reverseString(str){ 
  const reversedString =  
  str.split("").reduce((acc, char) => char + acc, ""); 
  return reversedString; 
} 

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <MathJax.Provider>
      <p>To exit a nested object in your expression (e.g. matrix, fraction, square root, superscript, etc.), press Enter while inside it. </p>
      <p id = "matrixNote" visibility = "hidden">While in a matrix, press space for a new column, and tab for a new row</p>
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
      if(event.key === "Shift" || event.key === "Alt")
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
