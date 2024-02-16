import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MathJax from 'react-mathjax';

function Expression({startingExpression = ''}) {

  const [expression, setExpression] = useState(startingExpression);
  var currentExpression = startingExpression;
  var matrix = false;

  

  const handleKeyPress = useCallback((event) => {
    var midIndex = currentExpression.indexOf('\\mid')
    var front = currentExpression.slice(0, midIndex + 4);
    var back = currentExpression.slice(midIndex + 4, currentExpression.length);
    event.preventDefault()
    if (event.repeat) {
      return;
    }

    if (event.altKey) {
      if (event.key === "a") {
        front = front.slice(0, front.length - 5);
        front += ' \\alpha \\mid'
      }
      if (event.key === "b") {
        front = front.slice(0, front.length - 5);
        front += ' \\beta \\mid'
      }
      if (event.key === "y") {
        front = front.slice(0, front.length - 5);
        front += ' \\gamma \\mid'
      }
      if (event.key === "d") {
        front = front.slice(0, front.length - 5);
        front += ' \\delta \\mid'
      }
      if (event.key === "e") {
        front = front.slice(0, front.length - 5);
        front += ' \\epsilon \\mid'
      }
      if (event.key === "Z") {
        front = front.slice(0, front.length - 5);
        front += ' \\zeta \\mid'
      }
      if (event.key === "n") {
        front = front.slice(0, front.length - 5);
        front += ' \\eta \\mid'
      }
      if (event.key === "q") {
        front = front.slice(0, front.length - 5);
        front += ' \\theta \\mid'
      }
      if (event.key === "I") {
        front = front.slice(0, front.length - 5);
        front += ' \\iota \\mid'
      }
      if (event.key === "k") {
        front = front.slice(0, front.length - 5);
        front += ' \\kappa \\mid'
      }
      if (event.key === "l") {
        front = front.slice(0, front.length - 5);
        front += ' \\lambda \\mid'
      }
      if (event.key === "m") {
        front = front.slice(0, front.length - 5);
        front += ' \\mu \\mid'
      }
      if (event.key === "&") {
        front = front.slice(0, front.length - 5);
        front += ' \\nu \\mid'
      }
      if (event.key === "j") {
        front = front.slice(0, front.length - 5);
        front += ' \\xi \\mid'
      }
      if (event.key === "g") {
        front = front.slice(0, front.length - 5);
        front += ' \\pi \\mid'
      }
      if (event.key === "p") {
        front = front.slice(0, front.length - 5);
        front += ' \\rho \\mid'
      }
      if (event.key === "s") {
        front = front.slice(0, front.length - 5);
        front += ' \\sigma \\mid'
      }
      if (event.key === "t") {
        front = front.slice(0, front.length - 5);
        front += ' \\tau \\mid'
      }
      if (event.key === "u") {
        front = front.slice(0, front.length - 5);
        front += ' \\upsilon \\mid'
      }
      if (event.key === "f") {
        front = front.slice(0, front.length - 5);
        front += ' \\phi \\mid'
      }
      if (event.key === "x") {
        front = front.slice(0, front.length - 5);
        front += ' \\chi \\mid'
      }
      if (event.key === "5") {
        front = front.slice(0, front.length - 5);
        front += ' \\psi \\mid'
      }
      if (event.key === "o") {
        front = front.slice(0, front.length - 5);
        front += ' \\omega \\mid'
      }
      if (event.key === "Y") {
        front = front.slice(0, front.length - 5);
        front += ' \\Gamma \\mid'
      }
      if (event.key === "D") {
        front = front.slice(0, front.length - 5);
        front += ' \\Delta \\mid'
      }
      if (event.key === "Q") {
        front = front.slice(0, front.length - 5);
        front += ' \\Theta \\mid'
      }
      if (event.key === "L") {
        front = front.slice(0, front.length - 5);
        front += ' \\Lambda \\mid'
      }
      if (event.key === "J") {
        front = front.slice(0, front.length - 5);
        front += ' \\Xi \\mid'
      }
      if (event.key === "S") {
        front = front.slice(0, front.length - 5);
        front += ' \\Sigma \\mid'
      }
      if (event.key === "U") {
        front = front.slice(0, front.length - 5);
        front += ' \\Upsilon \\mid'
      }
      if (event.key === "F") {
        front = front.slice(0, front.length - 5);
        front += ' \\Phi \\mid'
      }
      if (event.key === "%") {
        front = front.slice(0, front.length - 5);
        front += ' \\Psi \\mid'
      }
      if (event.key === "O") {
        front = front.slice(0, front.length - 5);
        front += ' \\Omega \\mid'
      }
      if (event.key === ",") {
        front = front.slice(0, front.length - 5);
        front += ' \\leq \\mid'
      }
      if (event.key === ".") {
        front = front.slice(0, front.length - 5);
        front += ' \\geq \\mid'
      }
      if (event.key === "=") {
        front = front.slice(0, front.length - 5);
        front += ' \\neq \\mid'
      }
      if (event.key === "9") {
        front = front.slice(0, front.length - 5);
        front += ' \\subset \\mid'
      }
      if (event.key === "0") {
        front = front.slice(0, front.length - 5);
        front += ' \\supset \\mid'
      }
      if (event.key === "+") {
        front = front.slice(0, front.length - 5);
        front += ' \\equiv \\mid'
      }
      if (event.key === "1") {
        front = front.slice(0, front.length - 5);
        front += ' \\in \\mid'
      }
      if (event.key === "!") {
        front = front.slice(0, front.length - 5);
        front += ' \\notin \\mid'
      }
      if (event.key === "(") {
        front = front.slice(0, front.length - 5);
        front += ' \\subseteq \\mid'
      }
      if (event.key === ")") {
        front = front.slice(0, front.length - 5);
        front += ' \\supseteq \\mid'
      }
      if (event.key === "h") {
        front = front.slice(0, front.length - 5);
        front += ' \\parallel \\mid'
      }
      if (event.key === "H") {
        front = front.slice(0, front.length - 5);
        front += ' \\perp \\mid'
      }
      if (event.key === "`") {
        front = front.slice(0, front.length - 5);
        front += ' \\approx \\mid'
      }
      if (event.key === "-") {
        front = front.slice(0, front.length - 5);
        front += ' \\pm \\mid'
      }
      if (event.key === "R") {
        front = front.slice(0, front.length - 5);
        front += ' \\cdot \\mid'
      }
      if (event.key === "\\") {
        front = front.slice(0, front.length - 5);
        front += ' \\div \\mid'
      }
      if (event.key === "X") {
        front = front.slice(0, front.length - 5);
        front += ' \\times \\mid'
      }
      if (event.key === "c") {
        front = front.slice(0, front.length - 5);
        front += ' \\cup \\mid'
      }
      if (event.key === "2") {
        front = front.slice(0, front.length - 5);
        front += ' \\cap \\mid'
      }
      if (event.key === "v") {
        front = front.slice(0, front.length - 5);
        front += ' \\vee \\mid'
      }
      if (event.key === "4") {
        front = front.slice(0, front.length - 5);
        front += ' \\wedge \\mid'
      }
      if (event.key === "C") {
        front = front.slice(0, front.length - 5);
        front += ' \\bigcup \\mid'
      }
      if (event.key === "@") {
        front = front.slice(0, front.length - 5);
        front += ' \\bigcap \\mid'
      }
      if (event.key === "i") {
        front = front.slice(0, front.length - 5);
        front += ' \\int \\mid'
      }
      if (event.key === "G") {
        front = front.slice(0, front.length - 5);
        front += ' \\prod \\mid'
      }
      if (event.key === "V") {
        front = front.slice(0, front.length - 5);
        front += ' \\bigvee \\mid'
      }
      if (event.key === "$") {
        front = front.slice(0, front.length - 5);
        front += ' \\bigwedge \\mid'
      }
      if (event.key === "<") {
        front = front.slice(0, front.length - 5);
        front += ' \\gets \\mid'
      }
      if (event.key === ">") {
        front = front.slice(0, front.length - 5);
        front += ' \\to \\mid'
      }
      if (event.key === "?") {
        front = front.slice(0, front.length - 5);
        front += ' \\leftrightarrow \\mid'
      }
      if (event.key === "w") {
        front = front.slice(0, front.length - 5);
        front += ' \\uparrow \\mid'
      }
      if (event.key === "W") {
        front = front.slice(0, front.length - 5);
        front += ' \\downarrow \\mid'
      }
      if (event.key === "B") {
        front = front.slice(0, front.length - 5);
        front += ' \\cdots \\mid'
      }
      if (event.key === "M") {
        front = front.slice(0, front.length - 5);
        front += ' \\vdots \\mid'
      }
      if (event.key === "N") {
        front = front.slice(0, front.length - 5);
        front += ' \\ddots \\mid'
      }
      if (event.key === "A") {
        front = front.slice(0, front.length - 5);
        front += ' \\forall \\mid'
      }
      if (event.key === "E") {
        front = front.slice(0, front.length - 5);
        front += ' \\exists \\mid'
      }
      if (event.key === "6") {
        front = front.slice(0, front.length - 5);
        front += ' \\partial \\mid'
      }
      if (event.key === "8") {
        front = front.slice(0, front.length - 5);
        front += ' \\infty \\mid'
      }
      if (event.key === ";") {
        front = front.slice(0, front.length - 5);
        front += ' \\emptyset \\mid'
      }
      if (event.key === ":") {
        front = front.slice(0, front.length - 5);
        front += ' \\neg \\mid'
      }
      if (event.key === "^") {
        front = front.slice(0, front.length - 5);
        front += ' \\hat{ \\mid } '
      }
      if (event.key === "_") {
        front = front.slice(0, front.length - 5);
        front += ' \\bar{ \\mid } '
      }
      if (event.key === "#") {
        front = front.slice(0, front.length - 5);
        front += ' \\vec{ \\mid } '
      }
      if (event.key === "*") {
        front = front.slice(0, front.length - 5);
        front += ' \\dot{ \\mid } '
      }
      if (event.key === "~") {
        front = front.slice(0, front.length - 5);
        front += ' \\tilde{ \\mid } '
      }
      if (event.key === "7") {
        front = front.slice(0, front.length - 5);
        front += ' \\sqrt{ \\mid } '
      }
      if (event.key === "/") {
        front = front.slice(0, front.length - 5);
        front += ' \\frac{ \\mid }{  } ';
      }
      if (event.key === "[" && !matrix) {
        front = front.slice(0, front.length - 5);
        front += ' \\begin{bmatrix} \\mid \\end{bmatrix} '
        matrix = true;
      }
      if (event.key === "]" && !matrix) {
        front = front.slice(0, front.length - 5);
        front += ' \\begin{pmatrix} \\mid \\end{pmatrix} '
        matrix = true;
      }


    } else {
      if (event.key === "a") {
        front = front.slice(0, front.length - 5);
        front += ' a \\mid'
      }
      if (event.key === "b") {
        front = front.slice(0, front.length - 5);
        front += ' b \\mid'
      }
      if (event.key === "y") {
        front = front.slice(0, front.length - 5);
        front += ' y \\mid'
      }
      if (event.key === "d") {
        front = front.slice(0, front.length - 5);
        front += ' d \\mid'
      }
      if (event.key === "e") {
        front = front.slice(0, front.length - 5);
        front += ' e \\mid'
      }
      if (event.key === "Z") {
        front = front.slice(0, front.length - 5);
        front += ' z \\mid'
      }
      if (event.key === "n") {
        front = front.slice(0, front.length - 5);
        front += ' n \\mid'
      }
      if (event.key === "q") {
        front = front.slice(0, front.length - 5);
        front += ' q \\mid'
      }
      if (event.key === "I") {
        front = front.slice(0, front.length - 5);
        front += ' I \\mid'
      }
      if (event.key === "k") {
        front = front.slice(0, front.length - 5);
        front += ' k \\mid'
      }
      if (event.key === "l") {
        front = front.slice(0, front.length - 5);
        front += ' l \\mid'
      }
      if (event.key === "m") {
        front = front.slice(0, front.length - 5);
        front += ' m \\mid'
      }
      if (event.key === "&") {
        front = front.slice(0, front.length - 5);
        front += ' & \\mid'
      }
      if (event.key === "j") {
        front = front.slice(0, front.length - 5);
        front += ' j \\mid'
      }
      if (event.key === "g") {
        front = front.slice(0, front.length - 5);
        front += ' g \\mid'
      }
      if (event.key === "p") {
        front = front.slice(0, front.length - 5);
        front += ' p \\mid'
      }
      if (event.key === "s") {
        front = front.slice(0, front.length - 5);
        front += ' s \\mid'
      }
      if (event.key === "t") {
        front = front.slice(0, front.length - 5);
        front += ' t \\mid'
      }
      if (event.key === "u") {
        front = front.slice(0, front.length - 5);
        front += ' u \\mid'
      }
      if (event.key === "f") {
        front = front.slice(0, front.length - 5);
        front += ' f \\mid'
      }
      if (event.key === "x") {
        front = front.slice(0, front.length - 5);
        front += ' x \\mid'
      }
      if (event.key === "5") {
        front = front.slice(0, front.length - 5);
        front += ' 5 \\mid'
      }
      if (event.key === "o") {
        front = front.slice(0, front.length - 5);
        front += ' o \\mid'
      }
      if (event.key === "Y") {
        front = front.slice(0, front.length - 5);
        front += ' Y \\mid'
      }
      if (event.key === "D") {
        front = front.slice(0, front.length - 5);
        front += ' D \\mid'
      }
      if (event.key === "Q") {
        front = front.slice(0, front.length - 5);
        front += ' Q \\mid'
      }
      if (event.key === "L") {
        front = front.slice(0, front.length - 5);
        front += ' L \\mid'
      }
      if (event.key === "J") {
        front = front.slice(0, front.length - 5);
        front += ' J \\mid'
      }
      if (event.key === "S") {
        front = front.slice(0, front.length - 5);
        front += ' S \\mid'
      }
      if (event.key === "U") {
        front = front.slice(0, front.length - 5);
        front += ' U \\mid'
      }
      if (event.key === "F") {
        front = front.slice(0, front.length - 5);
        front += ' F \\mid'
      }
      if (event.key === "%") {
        front = front.slice(0, front.length - 5);
        front += ' \\% \\mid'
      }
      if (event.key === "O") {
        front = front.slice(0, front.length - 5);
        front += ' O \\mid'
      }
      if (event.key === ",") {
        front = front.slice(0, front.length - 5);
        front += ' , \\mid'
      }
      if (event.key === ".") {
        front = front.slice(0, front.length - 5);
        front += ' . \\mid'
      }
      if (event.key === "=") {
        front = front.slice(0, front.length - 5);
        front += ' = \\mid'
      }
      if (event.key === "9") {
        front = front.slice(0, front.length - 5);
        front += ' 9 \\mid'
      }
      if (event.key === "0") {
        front = front.slice(0, front.length - 5);
        front += ' 0 \\mid'
      }
      if (event.key === "+") {
        front = front.slice(0, front.length - 5);
        front += ' + \\mid'
      }
      if (event.key === "1") {
        front = front.slice(0, front.length - 5);
        front += ' 1 \\mid'
      }
      if (event.key === "!") {
        front = front.slice(0, front.length - 5);
        front += ' ! \\mid'
      }
      if (event.key === "(") {
        front = front.slice(0, front.length - 5);
        front += ' ( \\mid'
      }
      if (event.key === ")") {
        front = front.slice(0, front.length - 5);
        front += ' ) \\mid'
      }
      if (event.key === "h") {
        front = front.slice(0, front.length - 5);
        front += ' h \\mid'
      }
      if (event.key === "H") {
        front = front.slice(0, front.length - 5);
        front += ' H \\mid'
      }
      if (event.key === "`") {
        front = front.slice(0, front.length - 5);
        front += ' ` \\mid'
      }
      if (event.key === "-") {
        front = front.slice(0, front.length - 5);
        front += ' - \\mid'
      }
      if (event.key === "R") {
        front = front.slice(0, front.length - 5);
        front += ' R \\mid'
      }
      if (event.key === "\\") {
        front = front.slice(0, front.length - 5);
        front += ' \\ \\mid'
      }
      if (event.key === "X") {
        front = front.slice(0, front.length - 5);
        front += ' X \\mid'
      }
      if (event.key === "c") {
        front = front.slice(0, front.length - 5);
        front += ' c \\mid'
      }
      if (event.key === "2") {
        front = front.slice(0, front.length - 5);
        front += ' 2 \\mid'
      }
      if (event.key === "v") {
        front = front.slice(0, front.length - 5);
        front += ' v \\mid'
      }
      if (event.key === "4") {
        front = front.slice(0, front.length - 5);
        front += ' 4 \\mid'
      }
      if (event.key === "C") {
        front = front.slice(0, front.length - 5);
        front += ' C \\mid'
      }
      if (event.key === "@") {
        front = front.slice(0, front.length - 5);
        front += ' @ \\mid'
      }
      if (event.key === "i") {
        front = front.slice(0, front.length - 5);
        front += ' i \\mid'
      }
      if (event.key === "G") {
        front = front.slice(0, front.length - 5);
        front += ' G \\mid'
      }
      if (event.key === "V") {
        front = front.slice(0, front.length - 5);
        front += ' V \\mid'
      }
      if (event.key === "$") {
        front = front.slice(0, front.length - 5);
        front += ' $ \\mid'
      }
      if (event.key === "<") {
        front = front.slice(0, front.length - 5);
        front += ' < \\mid'
      }
      if (event.key === ">") {
        front = front.slice(0, front.length - 5);
        front += ' > \\mid'
      }
      if (event.key === "?") {
        front = front.slice(0, front.length - 5);
        front += ' ? \\mid'
      }
      if (event.key === "w") {
        front = front.slice(0, front.length - 5);
        front += ' w \\mid'
      }
      if (event.key === "W") {
        front = front.slice(0, front.length - 5);
        front += ' W \\mid'
      }
      if (event.key === "B") {
        front = front.slice(0, front.length - 5);
        front += ' B \\mid'
      }
      if (event.key === "M") {
        front = front.slice(0, front.length - 5);
        front += ' M \\mid'
      }
      if (event.key === "N") {
        front = front.slice(0, front.length - 5);
        front += ' N \\mid'
      }
      if (event.key === "A") {
        front = front.slice(0, front.length - 5);
        front += ' A \\mid'
      }
      if (event.key === "E") {
        front = front.slice(0, front.length - 5);
        front += ' E \\mid'
      }
      if (event.key === "6") {
        front = front.slice(0, front.length - 5);
        front += ' 6 \\mid'
      }
      if (event.key === "8") {
        front = front.slice(0, front.length - 5);
        front += ' 8 \\mid'
      }
      if (event.key === ";") {
        front = front.slice(0, front.length - 5);
        front += ' ; \\mid'
      }
      if (event.key === ":") {
        front = front.slice(0, front.length - 5);
        front += ' : \\mid'
      }
      if (event.key === "~") {
        front = front.slice(0, front.length - 5);
        front += ' ~ \\mid'
      }
      if (event.key === "3") {
        front = front.slice(0, front.length - 5);
        front += ' 3 \\mid'
      }
      if (event.key === "#") {
        front = front.slice(0, front.length - 5);
        front += ' \\# \\mid'
      }
      if (event.key === "^") {
        front = front.slice(0, front.length - 5);
        front += ' ^{ \\mid } '
      }
      if (event.key === "7") {
        front = front.slice(0, front.length - 5);
        front += ' 7 \\mid'
      }
      if (event.key === "*") {
        front = front.slice(0, front.length - 5);
        front += ' * \\mid'
      }
      if (event.key === "_") {
        front = front.slice(0, front.length - 5);
        front += ' _{ \\mid } '  
      }
      if (event.key === "r") {
        front = front.slice(0, front.length - 5);
        front += ' r \\mid'
      }
      if (event.key === "T") {
        front = front.slice(0, front.length - 5);
        front += ' T \\mid'
      }
      if (event.key === "{") {
        front = front.slice(0, front.length - 5);
        front += ' \\{ \\mid'
      }
      if (event.key === "}") {
        front = front.slice(0, front.length - 5);
        front += ' \\} \\mid'
      }
      if (event.key === "[") {
        front = front.slice(0, front.length - 5);
        front += ' [ \\mid'
      }
      if (event.key === "]") {
        front = front.slice(0, front.length - 5);
        front += ' ] \\mid'
      }
      if (event.key === "|") {
        front = front.slice(0, front.length - 5);
        front += ' | \\mid'
      }
      if (event.key === "\\") {
        front = front.slice(0, front.length - 5);
        front += ' \\ \\mid'
      }
      if (event.key === "K") {
        front = front.slice(0, front.length - 5);
        front += ' K \\mid'
      }
      if (event.key === "'") {
        front = front.slice(0, front.length - 5);
        front += ' \' \\mid'
      }
      if (event.key === "\"") {
        front = front.slice(0, front.length - 5);
        front += ' " \\mid'
      }
      if (event.key === "z") {
        front = front.slice(0, front.length - 5);
        front += ' z \\mid'
      }
      if (event.key === "/") {
        front = front.slice(0, front.length - 5);
        front += ' / \\mid'
      }
      if(event.key === " " && matrix) {
        front = front.slice(0, front.length - 5);
        front += " & \\mid"
      }
      if (event.key === "Tab" && matrix) {
        front = front.slice(0, front.length - 5);
        front += " \\\\ \\mid"
      }
    }
    if(event.key == "Enter") {
      front = front.slice(0, front.length - 5);
      var firstBracket = back.indexOf("}");
      var skipBy = 2;
      if (back[firstBracket + 1] === "{") {
        skipBy = 3
      }
      back = back.slice(0, firstBracket + skipBy) + "\\mid" + back.slice(firstBracket + skipBy, back.length);
    }

    if(event.key == "Backspace") {
      front = front.slice(0, front.length - 5);
      var resversedFront = reverseString(front);
      var reversedDeleteTo = resversedFront.indexOf(" ");
      var deleteTo = front.length - reversedDeleteTo;
      var SegmentToDelete = front.slice(deleteTo, front.length);
      if(SegmentToDelete.indexOf("{") != -1) {
        if(back.indexOf("}{") == 1) {
          back = back.slice(back.indexOf("}{") + 2, back.length);
        }
        back = back.slice(back.indexOf("}") + 1, back.length);
      }
      front = front.slice(0, deleteTo) + "\\mid";
      if(SegmentToDelete.indexOf("}{") != -1) {
        front += " }{  } "
      } else if(SegmentToDelete.indexOf("matrix") != -1) {
        back = back.slice(back.indexOf("matrix") + 8, back.length)
        matrix = false;
      } 
      else if(SegmentToDelete.indexOf("}") != -1) {
        front += " } ";
      }
    }

    if(event.key === "ArrowLeft") {
      front = front.slice(0, front.length - 5);
      var resversedFront = reverseString(front);
      var reversedMoveTo = resversedFront.indexOf(" ");
      var moveTo = front.length - reversedMoveTo;
      front = front.slice(0, moveTo) + "\\mid" + front.slice(moveTo, front.length);
    }
    currentExpression = front + back;
    //alert("hey" + currentExpression + "hey");
    setExpression(currentExpression);
    //TODO: Deleting, editing, moving where user is, creating a new expression with copyability. 
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
