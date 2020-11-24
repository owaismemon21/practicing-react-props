import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <h1>Todays Menu</h1>
      <hr/>
      <Dinner mainDish="Chicken Biryani" mainDishRate="180" sideDish="Meethay Chawal" sideDishRate="130" />
      <hr/>
      <Dinner mainDish="Nihari" mainDishRate="250" sideDish="Kheer" sideDishRate="80" />
    </div>
  );
}

export default App;
