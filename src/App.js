import './App.css';
import StarRating from './components/starRating/starRating';

const logCalling = (result) => {
  console.log(result);
}

function App() {
  return (
    <div className="App">
      <StarRating numberOfStars={5} onChange={logCalling} />
    </div>
  );
}

export default App;
