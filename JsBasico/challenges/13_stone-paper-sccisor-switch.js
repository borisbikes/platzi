var guest = prompt("Please enter your name", "Hermione Granger");

var game = {
    gun: {  STONE: 'stone',
            PAPER: 'paper',
            SCISSOR: 'scissor'
    },
    user1: {
            name: 'Me'
    },
    user2: {
            name: 'ROBOT'
    },
    win: ''
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
    
    game.user1.name = guest;
    game.user1.gun = el1;
    game.user2.gun = el2;
    game.win = '';

    if(el1 == el2){
        game.win = "draw";

    }else {
        switch(el1){
            case game.gun.STONE:
                switch(el2){
                    case game.gun.PAPER: 
                        game.win = game.user2.name;
                        break;
                    default://SCISSOR
                        game.win = game.user1.name;
                }

            case game.gun.PAPER:
                switch(el2){
                    case game.gun.SCISSOR: 
                        game.win = game.win == '' ? game.user2.name : game.win;
                        break;
                    default://STONE
                        game.win = game.win == '' ? game.user1.name : game.win;
                }

            default://el1:SCISSOR
                switch(el2){
                    case game.gun.STONE: 
                        game.win = game.win == '' ?  game.user2.name : game.win;
                        break;
                    default://PAPER
                        game.win = game.win == '' ?  game.user1.name : game.win;
                }
        }
    
    }
    
    console.log('fight : ' + game.user1.name + ' - ' +  game.user1.gun + ' vs ' +  
                game.user2.name + " - " +  game.user2.gun + 
                ' win : ' + game.win);
}


