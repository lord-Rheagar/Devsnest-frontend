import React from "react"
import "./App.css"

const Calorie=({id, food, calorieIntake, data, setData})=>{

    let deleteEle = () => {
        let newData = data.filter((el) => el.id !== id);
       setData([...newData])
      };
    
    return(
     
        <div className="container">
            <h1>{food}</h1>

            <h4>{calorieIntake}</h4>

          <button onClick={deleteEle} >Delete</button>
            
        </div>

    
        
    )
}

export default Calorie