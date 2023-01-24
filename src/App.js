// import 'bulma/css/bulma.css'; // don't assign any variable, just import

import { useState } from 'react';
import AnimalShow from './AnimalShow';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>ADD</button>
      <div>Count: {count}</div>
      <AnimalShow />
    </div>
  );
}

export default App;
