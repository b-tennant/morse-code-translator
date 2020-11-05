const alphabet = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
  };

  // english text to morse code
  const textToMorse = () => {
      const input = document.getElementById("text");
      const inputValue = input.value;
      const output = document.getElementById("result");
      const inputChar = inputValue.toLowerCase().split("");
      const runInput = inputChar.map((char) => alphabet[char]);
      const returnValue = runInput.join(" ");
      output.innerHTML = returnValue;
  };

  // morse to text
  const morseToText = () => {
      const input = document.getElementById("text");
      const inputValue = input.value;
      const output = document.getElementById("result");
      const inputChar = inputValue.lowerCase().split(" ");  //char = character
      const runInput = inputChar.map(getValue);
      const returnValue = runInput.join(" ");
      output.innerHTML = returnValue;
    };

    // get key of the alphabet object
const getValue = (element) => {
    return Object.keys(alphabet).find((key) => alphabet[key] === element);
  };

  // translate button
const translate = () => {
    const input = document.getElementById("text");
    const inputValue = input.value;
    if (inputValue.includes(".") || inputValue.includes("-")) {
      return morseToText();
    } else {
      textToMorse();
    }
  };

//  window.onload = function () {'...eventListener...'}
// Without using the code snippet above, getElementById executes even before DOM fully loaded.
// Normally this wouldn't cause a problem but doing tests jest considered it as an error even though I didn't even export it.

window.onload = function () {
    document.getElementById("translate").addEventListener("click", translate);
  };
  
  module.exports = { textToMorse, alphabet, morseToText, getValue, translate };


  