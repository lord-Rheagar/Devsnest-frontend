
import React, {useState} from "react";
import Calorie from "./Calorie"
import foodData from "./data"
function App() {
  const [data, setData]=useState(foodData);


  
  
  const foodComponents = data.map(Food => <Calorie key={Food.id} food ={Food.food} calorieIntake={Food.calorieIntake} data={data} setData={setData}  />)

  


  return (
    <div className="App">
    
      
      {foodComponents}
      

     
      


     
    </div>
  );

  
}

export default App;
