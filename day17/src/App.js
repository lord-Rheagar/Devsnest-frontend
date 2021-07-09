
import './App.css';
import Calorie from "./Calorie"
function App() {
  return (
    <div className="App">
      <div class="container">
      <Calorie
       food="Fried Rice"
       calorieIntake="You have consumed 90 cals today"
      />
      
     </div>

     <div class="container">
      <Calorie
       food="Pizza"
       calorieIntake="You have consumed 56 cals today"
      />
      
     </div>

     <div class="container">
      <Calorie
       food="Burger"
       calorieIntake="You have consumed 69 cals today"
      />
      
     </div>

     <div class="container">
      <Calorie
       food="Coke"
       calorieIntake="You have consumed 500 cals today"
      />
      
     </div>

     <div class="container">
      <Calorie
       food="Browne"
       calorieIntake="You have consumed 180 cals today"
      />
      
     </div>


    </div>
  );
}

export default App;
