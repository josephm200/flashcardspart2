import './App.css';
import FlippableCard from './components/flippable-card';
// import {Button} from '@syncfusion-ejs-react-buttons';

function App() {
  return (
    <div className="App">
      <h1> Superhero Super Review</h1>
      <h3>Total Cards: 1</h3>
      <h2> Review your favorite superheroes and their secret identities! </h2>
      <FlippableCard/>
      {/* <Button>press me</Button><Button/> */}
      <h3> Just make sure not to give them away... </h3>
      <h2> </h2>

      <button>Next</button>
      <h1> </h1>

      <button>Back</button>
      <h1> </h1>
      <input type="text"
        placeholder="Enter Guess..."
        className = "textbox"/>
        <h1> </h1>
      <button>Shuffle</button>
      
    </div>
  );
}

export default App;
