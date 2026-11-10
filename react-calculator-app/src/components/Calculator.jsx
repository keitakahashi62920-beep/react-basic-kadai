import { useState } from 'react';
import '../App.css';

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', 'C', '=', '+',
];

function Calculator() {
  const [display, setDisplay] = useState('');

  function calculate(expression) {
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const match = expression.match(validExpression);
    if (!match) {
      throw new Error('無効な式です。');
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        throw new Error('無効な演算子です。');
    }
  }

  function handleClick(btn) {
    if (btn === 'C') {
      setDisplay('');
      return;
    }

    if (btn === '=') {
      try {
        setDisplay(String(calculate(display)));
      } catch {
        setDisplay('エラー');
      }
      return;
    }

    setDisplay((currentDisplay) => currentDisplay + btn);
  }

  return (
    <div>
      <h2>電卓アプリ</h2>
      <div className="calculator-container">{display || '0'}</div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
