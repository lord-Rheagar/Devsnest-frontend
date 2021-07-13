import React from "react"

const Square = (props) => {
   const styles={ backgroundColor: `${props.bg}`,
    width: "100%",
    height: "100%",
    border: "1px solid rgb(231, 231, 231)",
    boxSizing: "border-box"}
    return (
      <div className="square"
        style={styles}
      />
    );
  };
  
  export default Square;