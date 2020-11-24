import logo from './logo.svg';
import './App.css';

function Dinner(props) {
  return (
    <div>
      <h3>Today we are serving {props.mainDish} in {props.mainDishRate}/-</h3>
      <h4>We are also serving {props.sideDish} in {props.sideDishRate}/-</h4>
    </div>
  );
}

export default Dinner;
