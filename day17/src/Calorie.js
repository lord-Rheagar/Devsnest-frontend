import React from "react"

function Calorie(props){
    return(
        <div>
            <h1>{props.food}</h1>

            <h3>{props.calorieIntake}</h3>
        </div>
    )
}

export default Calorie