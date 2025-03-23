import { useRef, useState } from "react";


export default function Player() {
  let player = useRef(null)
  const [ enteredPlayerName, setEnterPlayerName] = useState(null)

  function handleClick() {
    setEnterPlayerName(player.current.value);
    player.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
