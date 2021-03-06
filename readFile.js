const readline = require("readline");

const lineReader = readline.createInterface({
  input: require("fs").createReadStream(__dirname + "/instructions.txt"),
});

let lineCounter = 0;
lineReader.on("line", (line) => {
  lineCounter++;

  printLine(line, lineCounter);
});

lineReader.on("close", () => {
  console.log("We could now execute some final action");
});

const printLine = (line, i) => {
  console.log(`Line ${i.toString().padStart(2, "0")}: ${line}`);
};


// make it move
let x = "";
let y = "";
let cardinal = "";

for (let i = 0; i < instructions.length; i++) {
  move()
}


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
