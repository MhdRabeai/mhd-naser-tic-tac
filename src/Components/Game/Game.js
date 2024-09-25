import React from "react";
import Box from "../Box/Box";

export default function Gm(props) {
  return (
    <section className="game-screen flex flex-col h-screen duration-700  bg-green-500   items-center">
      <div className="game-screen__title flex max-w-xs mt-10">
        <h1 className="game-screen__title-text text-3xl text-white">
          {props.player1 === true ? "Player 'X' Turn" : "Player 'O' Turn"}
        </h1>
      </div>
      <div className="game-screen__grid flex flex-col h-full justify-center content-center max-w-xs">
        <div className="self-center ">
          <div className="text-3xl max-w-xs">
            <div className="flex -mb-2 gap-2">
              <Box handleClickDiv={props.handleClickDiv} id={0} />
              <Box handleClickDiv={props.handleClickDiv} id={1} />
              <Box handleClickDiv={props.handleClickDiv} id={2} />
            </div>
            <div className="flex -mb-2 gap-2">
              <Box handleClickDiv={props.handleClickDiv} id={3} />
              <Box handleClickDiv={props.handleClickDiv} id={4} />
              <Box handleClickDiv={props.handleClickDiv} id={5} />
            </div>
            <div className="flex -mb-2 gap-2">
              <Box handleClickDiv={props.handleClickDiv} id={6} />
              <Box handleClickDiv={props.handleClickDiv} id={7} />
              <Box handleClickDiv={props.handleClickDiv} id={8} />
            </div>
          </div>
        </div>
      </div>
      <div className="game-screen__bottom-panel flex justify-center flex-row w-full max-w-xs gap-3 h-24">
        <button
          onClick={props.rePlay}
          className="bg-transparent hover:bg-white text-white font-semibold hover:text-green-500 py-2 px-4 border border-white hover:border-transparent rounded-xl mb-10 w-2/2"
        >
          Play Again
        </button>
      </div>
    </section>
  );
}
