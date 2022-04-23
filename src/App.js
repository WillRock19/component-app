import './App.css';
import StarRating from './components/StarRating';
import CustomAlert from './components/CustomAlert';
import Clock from './components/Clock';
import { CounterWithReducer } from './components/Counter';
import { useState } from 'react';

const logCalling = (result) => {
  console.log(result);
}

function App() {
  const [alertOpened, setAlertOpened] = useState(false);

  const closeAlert = () => {
    setAlertOpened(previousState => {
      return false;
    });
  }

  const openAlert = () => {
    setAlertOpened(true);
  }

  return (
    <div className="App">
      <section>
        <button onClick={openAlert}>Alert</button>
        {alertOpened ?
          <CustomAlert message={"This is my alert message!"} alertType="s" onCloseFn={closeAlert} />
          : <></>}
      </section>
      <section>
          <Clock />
      </section>
      <section>
          <CounterWithReducer />
      </section>
    </div>
  );
}

export default App;
