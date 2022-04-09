import './App.css';
import StarRating from './components/StarRating';
import CustomAlert from './components/CustomAlert';

const logCalling = (result) => {
  console.log(result);
}

function App() {
  return (
    <div className="App">
      <StarRating numberOfStars={5} onChange={logCalling} />
      <CustomAlert message={"This is my alert message!"} alertType="s" alertOpen={true} />
    </div>
  );
}

export default App;
