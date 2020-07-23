function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
​

let computerMove = getMoveName(randomNumber);
​
*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
  else if(randomNumber == 3){
    computerMove = 'nożyce';
}
let playerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyczki' && playerMove == 'papier'){
    printMessage('Przegrywasz');
}
if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
}
if( computerMove == 'nożyczki' && playerMove == 'nożyczki'){
    printMessage('Remis');
}
if( computerMove == 'nożyczki' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'nożyczki'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyczki'){
    printMessage('Przegrywasz');
}
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz');
}
​