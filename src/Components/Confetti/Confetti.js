import React, { useEffect } from "react";
import "./Confetti.css";
export default function Confetti() {
  function test() {
    for (let i = 0; i < 100; i++) {
      var randomRotation = Math.floor(Math.random() * 360);
      var randomScale = Math.random() * 1;
      var randomWidth = Math.floor(
        Math.random() *
          Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      );
      var randomHeight = Math.floor(
        Math.random() *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 500
          )
      );

      var randomAnimationDelay = Math.floor(Math.random() * 15);

      var colors = [
        "#0CD977",
        "#FF1C1C",
        "#FF93DE",
        "#5767ED",
        "#FFC61C",
        "#8497B0",
      ];
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      var confetti = document.createElement("div");
      confetti.id = "confetti";
      confetti.style.top = randomHeight + "px";
      confetti.style.right = randomWidth + "px";
      confetti.style.backgroundColor = randomColor;
      confetti.style.obacity = randomScale;
      confetti.style.transform =
        "skew(15deg) rotate(" + randomRotation + "deg)";
      confetti.style.animationDelay = randomAnimationDelay + "s";
      document.getElementById("confetti-wrapper").appendChild(confetti);
    }
  }
  useEffect(() => test());
  return (
    <div class="wrapper">
      <div id="confetti-wrapper"></div>
    </div>
  );
}
