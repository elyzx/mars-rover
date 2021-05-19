// The rover object

const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
};
  
// Turning the rover

function turnLeft(rover) {
  switch (rover.direction) {
    case "N": 
      rover.direction = "W";
      break;
    case "E": 
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log('turnLeft was called!');
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log('turnRight was called!');
}

// Moving the rover

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y > 0 ) {
        rover.y = rover.y-1;
      };
      break;
    case "E":
      if (rover.x < 9) {
        rover.x = rover.x+1;
      };
      break;
    case "S":
      if (rover.y < 9 ) {
        rover.y = rover.y+1;
      };
      break;
    case "W":
      if (rover.x > 0) {
        rover.x = rover.x-1;
      };      
      break;
  }
  rover.travelLog.push( [ rover.y, rover.x] );
  console.log('moveForward was called!');
}

function moveBackground(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y < 9 ) {
        rover.y = rover.y+1;
      };
      break;
    case "E":
      if (rover.x > 0) {
        rover.x = rover.x-1;
      };
      break;
    case "S":
      if (rover.y > 0 ) {
        rover.y = rover.y-1;
      };
      break;
    case "W":
      if (rover.x < 9) {
        rover.x = rover.x+1;
      };      
      break;
  }
  rover.travelLog.push( [ rover.y, rover.x] );
  console.log('moveBackward was called!');
}

// Commands + Tracking

function command(rover, str) {
  for (var i=0; i<str.length; i++)
    switch(str[i]) {
      case 'f': // forward
        moveForward(rover);
        break;
      case 'b': // backward
        moveBackward(rover);
        break;
      case 'r': // right
        turnRight(rover);
        break;
      case 'l': // left
        turnLeft(rover);
        break;
      default:
        console.log("Please enter a valid command using f, b, r, and/or l.");
    }
    console.log(rover.travelLog);
}

command(rover, 'rffrfflfrff');
