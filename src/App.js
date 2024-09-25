import { useEffect, useState } from "react";
import Game from "./Components/Lists/Lists";
import Loading from "./Components/Loading/Loading";
import "./App.css";

export default function App() {
  const [load, SetLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoad(false);
    }, 1500);
  }, []);
  return (
    <div className="App min-h-screen reta ">
    {load ? <Loading /> : <Game />}
    </div>
  );
}
