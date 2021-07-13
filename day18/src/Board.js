import React from "react";
import Square from "./square";

const Chessboard = () => {
  let squares = [];
  let x = 0;
  var backgroundColor = "white";
  var dark = "black";
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      backgroundColor = { dark };
    } else {
      backgroundColor = "white";
    }
    for (let j = 0; j < 8; j++) {
      backgroundColor = backgroundColor === "white" ? `${dark}` : "white";
      squares.push(<Square key={x} bg={backgroundColor} />);
    }
  }

  return <div className="chess-board">{squares}</div>;
};

export default Chessboard;