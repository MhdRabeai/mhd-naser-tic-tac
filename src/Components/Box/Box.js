import React from "react";

export default function Box(props) {
  return (
    <div
      onClick={props.handleClickDiv}
      id={props.id}
      className="game-screen__cell flex items-center justify-center w-20 mb-4 h-20 bg-transparent border-white border-2 rounded-xl bg-white bg-opacity-0 hover:bg-opacity-25 duration-300"
    ></div>
  );
}
