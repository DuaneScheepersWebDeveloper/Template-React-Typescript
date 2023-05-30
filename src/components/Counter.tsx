import { useState } from 'react';
import { styled } from 'styled-components';
const CounterStyles = styled.div`
  display: flex;
  align-items: flex-end;

  .counter > button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #737373;
    color: #d9d9d9;
    font-size: 1.5rem;
  }

  .counter > button:hover {
    background-color: #404040;
    color: #d9d9d9;
  }

  .counter > button:focus {
    outline: none;
  }

  .counter--count {
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262626;
  }

  .counter--plus {
    margin-left: -20px;
  }

  .counter--minus {
    margin-right: -20px;
    z-index: 1;
  }
`;
const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <CounterStyles>
      <h2>Counter</h2>
      <button onClick={decrementCount} className="counter--minus">
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button onClick={incrementCount} className="counter--plus">
        +
      </button>
    </CounterStyles>
  );
};

export default Counter;
