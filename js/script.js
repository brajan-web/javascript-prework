
  
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
  function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

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
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  displayResult(computerMove, playerMove)
}
