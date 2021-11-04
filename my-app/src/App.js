import logo from './logo.svg';
import './App.css';
import FoodMenu from './components/FoodMenu';
import { Outlet, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FoodMenu/> 
       <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/FoodMenu">FoodMenu</Link> |{" "}
        <Link to="/DishIngredients">Dish ingredients</Link>
      </nav>

      </header>
    </div>
  );
}

export default App;
