import { useEffect, useState } from "react";
import "./Lists.css";
import Gm from "../Game/Game";
import Overlay from "../Overlay/Overlay";
import Fireworks from "../Fireworks/Fireworks";
export default function Game() {
  const [clicked, setClicked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });
  const [player1, setPlayer1] = useState(true);
  const [winner, setWinner] = useState("");
  const [endG, setEndg] = useState(false);
  function handleClickDiv(e) {
    try {
      if (winner === "") {
        let indx = Object.keys(clicked).indexOf(e.target["id"]);
        if (Object.getOwnPropertyDescriptors(clicked)[indx].value === false) {
          if (player1) {
            setClicked((e) => ({
              ...e,
              [indx]: 1,
            }));
            e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" className="text-white pointer-events-none select-none duration-300 h-full w-full" fill="none" viewBox="0 0 24 24" stroke="#fff">
              <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 20 20 4M4 4 20 20"></path>
            </svg>`;
            setPlayer1(false);
          }
          if (!player1) {
            e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" className="text-white pointer-events-none select-none duration-300 h-full w-full" fill="none" viewBox="0 0 24 24" stroke="#fff">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728"></path>
              </svg>`;

            setClicked((e) => ({
              ...e,
              [indx]: 2,
            }));
            setPlayer1(true);
          }
        }
      }
    } catch (err) {
      e.preventDefault();
      console.log(err.message);
    }
  }
  function checkWinner() {
    if (
      (clicked["0"] === 1 && clicked["1"] === 1 && clicked["2"] === 1) ||
      (clicked["3"] === 1 && clicked["4"] === 1 && clicked["5"]) === 1 ||
      (clicked["6"] === 1 && clicked["7"] === 1 && clicked["8"] === 1)
    ) {
      setWinner("Winner Is X");
    }
    if (
      (clicked["0"] === 1 && clicked["4"] === 1 && clicked["8"] === 1) ||
      (clicked["2"] === 1 && clicked["4"] === 1 && clicked["6"] === 1) ||
      (clicked["0"] === 1 && clicked["3"] === 1 && clicked["6"] === 1) ||
      (clicked["1"] === 1 && clicked["4"] === 1 && clicked["7"] === 1) ||
      (clicked["2"] === 1 && clicked["5"] === 1 && clicked["8"] === 1)
    ) {
      setWinner("Winner Is X");
    }

    if (
      (clicked["0"] === 2 && clicked["1"] === 2 && clicked["2"] === 2) ||
      (clicked["3"] === 2 && clicked["4"] === 2 && clicked["5"] === 2) ||
      (clicked["6"] === 2 && clicked["7"] === 2 && clicked["8"] === 2)
    ) {
      setWinner("Winner Is O");
    }
    if (
      (clicked["0"] === 2 && clicked["4"] === 2 && clicked["8"] === 2) ||
      (clicked["2"] === 2 && clicked["4"] === 2 && clicked["6"] === 2) ||
      (clicked["0"] === 2 && clicked["3"] === 2 && clicked["6"] === 2) ||
      (clicked["1"] === 2 && clicked["4"] === 2 && clicked["7"] === 2) ||
      (clicked["2"] === 2 && clicked["5"] === 2 && clicked["8"] === 2)
    ) {
      setWinner("Winner Is O");
    }
  }
  function endGame() {
    return Object.values(clicked).every((e) => e !== false)
      ? setEndg(true)
      : null;
  }
  function rePlay() {
    setClicked({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    });
    setWinner("");
    document
      .querySelectorAll(".game-screen__cell")
      .forEach((e) => (e.innerHTML = ""));
  }
  function gameOver() {
    window.location.reload();
  }
  useEffect(() => {
    endGame();
    checkWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);
  return (
    <>
      {!endG ? (
        <>
          {winner === "" ? (
            <Gm
              player1={player1}
              handleClickDiv={handleClickDiv}
              rePlay={rePlay}
            />
          ) : (
            <>
              <Gm
                player1={player1}
                handleClickDiv={handleClickDiv}
                rePlay={rePlay}
              />
              <Overlay title={winner} function={rePlay} />
             
            </>
          )}
        </>
      ) : (
        <>
          <Gm
            player1={player1}
            handleClickDiv={handleClickDiv}
            rePlay={rePlay}
          />
          <Overlay title={"Game Over"} function={gameOver} />
        </>
      )}
    </>
  );
}
