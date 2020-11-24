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
      <hr/>
      <Dinner mainDish="Chicken Karahi" mainDishRate="150" sideDish="Gajar ka Halwa" sideDishRate="150" />
      <hr/>
      <Dinner mainDish="Chicken Handi" mainDishRate="200" sideDish="Gulab Jamun" sideDishRate="100" />
    </div>
  );
}

export default App;
