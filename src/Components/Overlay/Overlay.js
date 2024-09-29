export default function Overlay(props) {
  return (
    <div
      className={`end flex justify-center items-center flex-col text-white w-full	min-h-full	absolute left-0	top-0	z-50 ${props.class}`}
    >
      <h1 className="text-5xl	">{props.title}</h1>
      <div className="game-screen__bottom-panel mt-10  w-full max-w-xs  h-24 text-center">
        <button
          onClick={props.function}
          className="bg-transparent hover:bg-white text-white font-semibold hover:text-green-500 py-2 px-4 border border-white hover:border-transparent rounded-xl  w-2/2"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
