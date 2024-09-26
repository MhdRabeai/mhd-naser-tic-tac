import { useEffect, useState } from "react";
import Game from "./Components/Lists/Lists";
import Loading from "./Components/Loading/Loading";
import "./App.css";

export default function App() {
  const [load, SetLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoad(false);
    }, 2000);
  }, []);
  return (
    <div className="App min-h-screen  ">
    {load ? <Loading /> : <Game />}
    </div>
  );
}
