import { useState } from 'react';

const UseStateExample = () => {
  const [result, setResult] = useState('Yes');

  const handleClick = () => {
    setResult('Yes Very Important');
  };
  console.log(result);

  return (
    <div className="state">
      <h1 className="state-title">Is state important to know?</h1>
      <div className="state-value">
        <h1>{result}</h1>
        <button onClick={handleClick}>How important</button>
      </div>
    </div>
  );
};

export default UseStateExample;
