import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={(e)=>{
        setCount(count+1)
      }}>+1</button>
      <p>scor32k</p>
    </div>
  );
}

export default App;
