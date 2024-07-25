import './App.css';
import {useState, useEffect, useCallback} from 'react';
import Viewer from './Components/Viewer';
import Controller from './Components/Controller';
import Even from './Components/Even'

  const handleSetCount = (Value) => {
    setCount(Count+value)
  }

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count 업데이트 : ${count}`)
  },[count])
    return (
    <div className = 'App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
};

export default App;
