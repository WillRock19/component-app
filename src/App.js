import './App.css';
import StarRating from './components/StarRating';
import CustomAlert from './components/CustomAlert';
import { useState } from 'react';

const logCalling = (result) => {
  console.log(result);
}

function App() {
  const [alertOpened, setalertOpened] = useState(false);

  const handleClick = () => {
    setalertOpened(previousState => {
      return !previousState;
    });
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Alert</button>
      {alertOpened ?
        <CustomAlert message={"This is my alert message!"} alertType="s" onCloseFn={handleClick} />
        : <></>}
    </div>
  );
}

export default App;
