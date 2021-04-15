var name1 = prompt("Please enter your name", "Harry Potter");

var game = {
    gun: { STONE: 'stone',
              PAPER: 'paper',
              SCISSOR: 'scissor'
    },
    user1: {
            name: "Me"
    },
    user2: {
            name: "ROBOT"
    },
    win:""
}

throwGame();

function throwGame(){

    whoWin(game.gun.STONE, game.gun.STONE);
    whoWin(game.gun.STONE, game.gun.PAPER);
    whoWin(game.gun.STONE, game.gun.SCISSOR);

    whoWin(game.gun.PAPER, game.gun.PAPER);
    whoWin(game.gun.PAPER, game.gun.STONE);
    whoWin(game.gun.PAPER, game.gun.SCISSOR);

    whoWin(game.gun.SCISSOR, game.gun.SCISSOR);
    whoWin(game.gun.SCISSOR, game.gun.STONE);
    whoWin(game.gun.SCISSOR, game.gun.PAPER);

}

function whoWin(el1, el2){
    game.user1.name = name1;
    game.user1.gun = el1;
    game.user2.gun = el2;

    if(el1 === el2){
        game.win = "draw";
    }
    if(el1 === game.gun.STONE && el2 === game.gun.PAPER){
        game.win = game.user2.name;
    }
    if(el1 === game.gun.STONE && el2 === game.gun.SCISSOR){
        game.win = game.user1.name;
    }
    if(el1 === game.gun.PAPER && el2 === game.gun.SCISSOR){
        game.win = game.user2.name;
    }
    if(el1 === game.gun.PAPER && el2 === game.gun.STONE){
        game.win = game.user1.name;
    }
    if(el1 === game.gun.SCISSOR && el2 === game.gun.STONE){
        game.win = game.user2.name;
    }
    if(el1 === game.gun.SCISSOR && el2 === game.gun.PAPER){
        game.win = game.user1.name;
    }

    console.log("fight : " + game.user1.name + " - " +  game.user1.gun + " vs " +  
                game.user2.name + " - " +  game.user2.gun + 
                " win : " + game.win);
}


