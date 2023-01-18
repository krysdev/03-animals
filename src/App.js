// import 'bulma/css/bulma.css'; // don't assign any variable, just import

import AnimalShow from "./AnimalShow";

function App() {
  const handleClick = () => { 
    console.log('XXX')
  };

  return (
    <div>
      <button onClick={handleClick}>ADD</button>
      <AnimalShow/>
    </div>
  );
}

export default App;
