const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {
  const isHidden = surpriseMessage.hidden;

  surpriseMessage.hidden = !isHidden;
  surpriseButton.textContent = isHidden
    ? "Close my message ♡"
    : "Open my message ♡";

  if (isHidden) {
    createFloatingSymbols();
  }
});

function createFloatingSymbols() {
  const symbols = ["♡", "♥", "🍀", "🪽", "🌼"];

  for (let i = 0; i < 18; i++) {
    const symbol = document.createElement("span");

    symbol.className = "floating-symbol";
    symbol.textContent = symbols[
      Math.floor(Math.random() * symbols.length)
    ];

    symbol.style.left = Math.random() * 100 + "vw";
    symbol.style.fontSize = (18 + Math.random() * 18) + "px";
    symbol.style.animationDelay = (Math.random() * 1.5) + "s";

    document.body.appendChild(symbol);

    symbol.addEventListener("animationend", () => {
      symbol.remove();
    }, { once: true });
  }
}