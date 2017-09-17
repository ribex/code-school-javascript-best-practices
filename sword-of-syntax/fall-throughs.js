function sansTemple(direction) {
  var happensNext;
  switch (direction) {
    case 'right hallway':
    case 'left hallway': 
    case 'forward hallway':
    case 'lower tunnel': happensNext = 'You find a door, it is locked. You head back from where you came.';
    break;
    case 'hidden door': happensNext = 'You go through the door into a room. A small, very dark room, that smells of dust and sulfer...';
    break;
    default: happensNext = 'You stand there, gaping, not moving. Aiedra wonders, are you alive?';
  }
  return happensNext;
}
sansTemple();