// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

function getRandomNumberOfTacos() {
  /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */

  let newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let random = newNumber[Math.floor(Math.random() * newNumber.length)];

  let finalArray = new Array(random).fill("🌮", 0);

  return finalArray;
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join("");
}

document.getElementById("tray").innerHTML = putTacosOnTray();
