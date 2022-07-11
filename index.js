// make it move
let x = "";
let y = "";
let cardinal = "";

function forward(x, y, cardinal) {
  switch (cardinal) {
    case "N":
      y += 1;
      break;
    case "E":
      x += 1;
      break;
    case "S":
      y -= 1;
      break;
    case "W":
      x -= 1;
      break;
    default:
      break;
  }
}

function changeDir(instruction, cardinal) {
  switch (cardinal) {
    case "N":
      if (instruction === "L") {
        cardinal === "W";
      }
      if (instruction === "R") {
        cardinal === "E";
      }
      break;
    case "E":
      if (instruction === "L") {
        cardinal === "N";
      }
      if (instruction === "R") {
        cardinal === "S";
      }
      break;
    case "S":
      if (instruction === "L") {
        cardinal === "E";
      }
      if (instruction === "R") {
        cardinal === "W";
      }
      break;
    case "W":
      if (instruction === "L") {
        cardinal === "S";
      }
      if (instruction === "R") {
        cardinal === "N";
      }
      break;
    default:
      break;
  }
}

function move(x, y, cardinal, instruction) {
  switch (instruction) {
    case "F":
      forward(x, y, cardinal);
      break;
    case "R":
    case "L":
      changeDir(instruction, cardinal);
    default:
      break;
  }
}

// make it know when it falls
