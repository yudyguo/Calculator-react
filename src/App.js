import { useState } from "react"; 
import "./App.css";

function App() { 
  const [result, setResult] = useState(""); 
  const [expression,setExpression] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const [lastOperator, setLastOperator] = useState(null);
  const [lastOperand, setLastOperand] = useState(null);

  const handleClick = (value) => {
      const isOperator = /[+\-×÷]/.test(value);

      if (isCalculated) {
        if (/[0-9]/.test(value)){
          setExpression(value);
          setResult("");
          setIsCalculated(false);
          return;
        } else if (isOperator){
          const newExpr = `${result}${value}`;
          setExpression(newExpr);
          setIsCalculated(false);
          return;
        }
      }

    setExpression((prev) => {
      if(prev ==="") 
        return value;

      const lastChar = prev.slice(-1);
      const secondLastChar = prev.slice(-2, -1);
      const lastIsOperator = /[+\-×÷]/.test(lastChar);
      const secondLastIsOperator = /[+\-×÷]/.test(secondLastChar);

      if(lastIsOperator && value === "-" && /[×÷]/.test(lastChar)) {
        return prev + value;
      }

      if(lastIsOperator && isOperator) {
        return prev.slice(0,-1) + value;
      }

      return prev + value;
    });

    setIsCalculated(false);
  };


  const clear = () => {
    setExpression("");
    setResult("");
    setIsCalculated(false);
    setLastOperand(null);
    setLastOperator(null);
  };


  const calculate = () => {
    try {
      if (isCalculated && lastOperator && lastOperand) {
        const repeatExpr = `${result}${lastOperator}${lastOperand}`;
        const safeRepeatExpr = repeatExpr      
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
        const evalResult = eval(safeRepeatExpr);
        setExpression(repeatExpr);
        setResult(evalResult);
        return;
      }

      const safeExpression = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

      const cleanedExpression = safeExpression
      .replace(/\b0+(\d+)/g,"$1");

      const validRegex = new RegExp("^[0-9+\\-*/.\\s]+$");

      if (!validRegex.test(cleanedExpression)) {
        setResult("Invalid Input");
        return;
      }

  const evalResult = eval(cleanedExpression);
      setResult(evalResult);
      setIsCalculated(true);
    
  const match = cleanedExpression.match(/([+\-*/])(\d+\.?\d*)$/);
  if(match){
    setLastOperator(match[1]);
    setLastOperand(match[2]);
  } 
  } catch (error) {
      setResult("Error");
  }
};

  
  const buttons = [
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","-",
    "C","0","=","+"
   ];


  return (
      <div className="calculator">
        <h2 className="text-center mb-3">Calculator</h2>

        <div className="display">
          <div>{expression || "0"}</div>
          <div className="text-gray-400">{result}</div>
        </div>

        <div className="calculator-grid">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === "C") clear();
                else if (btn === "=") calculate();
                else handleClick(btn);
              }}
              className={`btn ${btn === "=" ? "btn-equal" : btn === "C" ? "btn-clear" : ""}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
  );
}

export default App; 