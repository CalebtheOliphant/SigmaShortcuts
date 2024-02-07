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
    if (event.repeat) {
      return;
    }
    currentExpression = currentExpression.slice(0, currentExpression.length - (3 * modes + numerModes.length * 6));
    if(matrixMode >= 0) {
      currentExpression = currentExpression.slice(0, currentExpression.length - 12)
    }

    if (event.altKey) {
      if (event.key === "a") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\alpha \\mid '
      }
      if (event.key === "b") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\beta \\mid '
      }
      if (event.key === "y") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\gamma \\mid '
      }
      if (event.key === "d") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\delta \\mid '
      }
      if (event.key === "e") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\epsilon \\mid '
      }
      if (event.key === "Z") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\zeta \\mid '
      }
      if (event.key === "n") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\eta \\mid '
      }
      if (event.key === "q") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\theta \\mid '
      }
      if (event.key === "I") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\iota \\mid '
      }
      if (event.key === "k") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\kappa \\mid '
      }
      if (event.key === "l") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\lambda \\mid '
      }
      if (event.key === "m") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\mu \\mid '
      }
      if (event.key === "&") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\nu \\mid '
      }
      if (event.key === "j") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\xi \\mid '
      }
      if (event.key === "g") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\pi \\mid '
      }
      if (event.key === "p") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\rho \\mid '
      }
      if (event.key === "s") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\sigma \\mid '
      }
      if (event.key === "t") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\tau \\mid '
      }
      if (event.key === "u") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\upsilon \\mid '
      }
      if (event.key === "f") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\phi \\mid '
      }
      if (event.key === "x") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\chi \\mid '
      }
      if (event.key === "5") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\psi \\mid '
      }
      if (event.key === "o") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\omega \\mid '
      }
      if (event.key === "Y") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Gamma \\mid '
      }
      if (event.key === "D") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Delta \\mid '
      }
      if (event.key === "Q") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Theta \\mid '
      }
      if (event.key === "L") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Lambda \\mid '
      }
      if (event.key === "J") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Xi \\mid '
      }
      if (event.key === "S") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Sigma \\mid '
      }
      if (event.key === "U") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Upsilon \\mid '
      }
      if (event.key === "F") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Phi \\mid '
      }
      if (event.key === "%") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Psi \\mid '
      }
      if (event.key === "O") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\Omega \\mid '
      }
      if (event.key === ",") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\leq \\mid '
      }
      if (event.key === ".") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\geq \\mid '
      }
      if (event.key === "=") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\neq \\mid '
      }
      if (event.key === "9") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\subset \\mid '
      }
      if (event.key === "0") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\supset \\mid '
      }
      if (event.key === "+") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\equiv \\mid '
      }
      if (event.key === "1") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\in \\mid '
      }
      if (event.key === "!") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\notin \\mid '
      }
      if (event.key === "(") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\subseteq \\mid '
      }
      if (event.key === ")") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\supseteq \\mid '
      }
      if (event.key === "h") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\parallel \\mid '
      }
      if (event.key === "H") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\perp \\mid '
      }
      if (event.key === "`") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\approx \\mid '
      }
      if (event.key === "-") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\pm \\mid '
      }
      if (event.key === "R") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\cdot \\mid '
      }
      if (event.key === "\\") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\div \\mid '
      }
      if (event.key === "X") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\times \\mid '
      }
      if (event.key === "c") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\cup \\mid '
      }
      if (event.key === "2") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\cap \\mid '
      }
      if (event.key === "v") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\vee \\mid '
      }
      if (event.key === "4") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\wedge \\mid '
      }
      if (event.key === "C") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\bigcup \\mid '
      }
      if (event.key === "@") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\bigcap \\mid '
      }
      if (event.key === "i") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\int \\mid '
      }
      if (event.key === "G") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\prod \\mid '
      }
      if (event.key === "V") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\bigvee \\mid '
      }
      if (event.key === "$") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\bigwedge \\mid '
      }
      if (event.key === "<") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\gets \\mid '
      }
      if (event.key === ">") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\to \\mid '
      }
      if (event.key === "?") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\leftrightarrow \\mid '
      }
      if (event.key === "w") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\uparrow \\mid '
      }
      if (event.key === "W") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\downarrow \\mid '
      }
      if (event.key === "B") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\cdots \\mid '
      }
      if (event.key === "M") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\vdots \\mid '
      }
      if (event.key === "N") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\ddots \\mid '
      }
      if (event.key === "A") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\forall \\mid '
      }
      if (event.key === "E") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\exists \\mid '
      }
      if (event.key === "6") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\partial \\mid '
      }
      if (event.key === "8") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\infty \\mid '
      }
      if (event.key === ";") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\emptyset \\mid '
      }
      if (event.key === ":") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\neg \\mid '
      }
      if (event.key === "^") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\hat{ \\mid '
        modes++;
      }
      if (event.key === "_") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\bar{ \\mid '
        modes++;
      }
      if (event.key === "#") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\vec{ \\mid '
        modes++;
      }
      if (event.key === "*") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\dot{ \\mid '
        modes++;
      }
      if (event.key === "~") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\tilde{ \\mid '
        modes++;
      }
      if (event.key === "7") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\sqrt{ \\mid '
        modes++;
      }
      if (event.key === "/") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\frac{ \\mid ';
        numerModes.push(modes);
        modes++;
      }
      if (event.key === "[" && matrixMode === -1) {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += '\\begin{bmatrix} \\mid '
        matrixMode = modes;
        ispmatrix = false;
        modes++;
      }
      if (event.key === "]" && matrixMode === -1) {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += '\\begin{pmatrix} \\mid '
        matrixMode = modes;
        ispmatrix = true;
        modes++;
      }


    } else {
      if (event.key === "a") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' a \\mid '
      }
      if (event.key === "b") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' b \\mid '
      }
      if (event.key === "y") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' y \\mid '
      }
      if (event.key === "d") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' d \\mid '
      }
      if (event.key === "e") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' e \\mid '
      }
      if (event.key === "Z") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' z \\mid '
      }
      if (event.key === "n") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' n \\mid '
      }
      if (event.key === "q") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' q \\mid '
      }
      if (event.key === "I") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' I \\mid '
      }
      if (event.key === "k") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' k \\mid '
      }
      if (event.key === "l") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' l \\mid '
      }
      if (event.key === "m") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' m \\mid '
      }
      if (event.key === "&") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' & \\mid '
      }
      if (event.key === "j") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' j \\mid '
      }
      if (event.key === "g") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' g \\mid '
      }
      if (event.key === "p") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' p \\mid '
      }
      if (event.key === "s") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' s \\mid '
      }
      if (event.key === "t") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' t \\mid '
      }
      if (event.key === "u") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' u \\mid '
      }
      if (event.key === "f") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' f \\mid '
      }
      if (event.key === "x") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' x \\mid '
      }
      if (event.key === "5") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 5 \\mid '
      }
      if (event.key === "o") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' o \\mid '
      }
      if (event.key === "Y") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' Y \\mid '
      }
      if (event.key === "D") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' D \\mid '
      }
      if (event.key === "Q") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' Q \\mid '
      }
      if (event.key === "L") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' L \\mid '
      }
      if (event.key === "J") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' J \\mid '
      }
      if (event.key === "S") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' S \\mid '
      }
      if (event.key === "U") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' U \\mid '
      }
      if (event.key === "F") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' F \\mid '
      }
      if (event.key === "%") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' % \\mid '
      }
      if (event.key === "O") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' O \\mid '
      }
      if (event.key === ",") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' , \\mid '
      }
      if (event.key === ".") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' . \\mid '
      }
      if (event.key === "=") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' = \\mid '
      }
      if (event.key === "9") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 9 \\mid '
      }
      if (event.key === "0") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 0 \\mid '
      }
      if (event.key === "+") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' + \\mid '
      }
      if (event.key === "1") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 1 \\mid '
      }
      if (event.key === "!") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ! \\mid '
      }
      if (event.key === "(") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ( \\mid '
      }
      if (event.key === ")") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ) \\mid '
      }
      if (event.key === "h") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' h \\mid '
      }
      if (event.key === "H") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' H \\mid '
      }
      if (event.key === "`") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ` \\mid '
      }
      if (event.key === "-") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' - \\mid '
      }
      if (event.key === "R") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' R \\mid '
      }
      if (event.key === "\\") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\ \\mid '
      }
      if (event.key === "X") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' X \\mid '
      }
      if (event.key === "c") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' c \\mid '
      }
      if (event.key === "2") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 2 \\mid '
      }
      if (event.key === "v") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' v \\mid '
      }
      if (event.key === "4") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 4 \\mid '
      }
      if (event.key === "C") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' C \\mid '
      }
      if (event.key === "@") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' @ \\mid '
      }
      if (event.key === "i") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' i \\mid '
      }
      if (event.key === "G") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' G \\mid '
      }
      if (event.key === "V") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' V \\mid '
      }
      if (event.key === "$") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' $ \\mid '
      }
      if (event.key === "<") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' < \\mid '
      }
      if (event.key === ">") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' > \\mid '
      }
      if (event.key === "?") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ? \\mid '
      }
      if (event.key === "w") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' w \\mid '
      }
      if (event.key === "W") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' W \\mid '
      }
      if (event.key === "B") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' B \\mid '
      }
      if (event.key === "M") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' M \\mid '
      }
      if (event.key === "N") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' N \\mid '
      }
      if (event.key === "A") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' A \\mid '
      }
      if (event.key === "E") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' E \\mid '
      }
      if (event.key === "6") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 6 \\mid '
      }
      if (event.key === "8") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 8 \\mid '
      }
      if (event.key === ";") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ; \\mid '
      }
      if (event.key === ":") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' : \\mid '
      }
      if (event.key === "~") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ~ \\mid '
      }
      if (event.key === "3") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 3 \\mid '
      }
      if (event.key === "#") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' # \\mid '
      }
      if (event.key === "^") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        modes++;
        currentExpression += ' ^{ \\mid '
      }
      if (event.key === "7") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' 7 \\mid '
      }
      if (event.key === "*") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' * \\mid '
      }
      if (event.key === "_") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        modes++;
        currentExpression += ' _{ \\mid '
      }
      if (event.key === "r") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' r \\mid '
      }
      if (event.key === "T") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' T \\mid '
      }
      if (event.key === "{") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\{ \\mid '
      }
      if (event.key === "}") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\} \\mid '
      }
      if (event.key === "[") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' [ \\mid '
      }
      if (event.key === "]") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' ] \\mid '
      }
      if (event.key === "|") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' | \\mid '
      }
      if (event.key === "\\") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \\ \\mid '
      }
      if (event.key === "K") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' K \\mid '
      }
      if (event.key === "'") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' \' \\mid '
      }
      if (event.key === "\"") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' " \\mid '
      }
      if (event.key === "z") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' z \\mid '
      }
      if (event.key === "/") {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += ' / \\mid '
      }
      if(event.key === " " && matrixMode === modes - 1) {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += " & \\mid "
      }
      if (event.key === "Tab" && matrixMode === modes - 1) {
        currentExpression = currentExpression.slice(0, currentExpression.length - 6);
        currentExpression += " \\\\ \\mid "
      }
    }

    if(event.key === "Enter") {
      currentExpression = currentExpression.slice(0, currentExpression.length - 6);
    }
    
    var placeMid = false;

    for( var i = modes - 1; i >= 0; i--) {
      placeMid = false;
      if(currentExpression.indexOf("\\mid ") === -1 && i === modes - 1) {
        placeMid = true;
      }
      if(numerModes.includes(i)) {
        currentExpression += ' }  { '
        if(placeMid) {
          currentExpression += "\\mid "
        }
        currentExpression += " } "
      } else if (i === matrixMode) {
        if (ispmatrix) {
          currentExpression += ' \\end{pmatrix} ' 
        } else {
          currentExpression += ' \\end{bmatrix} ' 
        }
        if(placeMid) {
          currentExpression += "\\mid "
        }
      } else {
        currentExpression += ' } '
        if(placeMid) {
          currentExpression += "\\mid "
        }
      }
    }

    if (event.key === "Enter") {
      modes--;
      if(numerModes.includes(modes)) {
        numerModes.pop(numerModes.indexOf(modes));
        modes++;
      }
      if(modes === matrixMode) {
        matrixMode =  -1;
      }
    }
    setExpression(currentExpression);
    //TODO: Deleting, editing, moving where user is, creating a new expression with copyability. 
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
