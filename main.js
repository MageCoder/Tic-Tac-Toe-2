// filereader
const fs = require('fs');

// readline, console interface
const readline = require('readline');

// game classes
const Game = require('./lib/models/game');
const Player = require('./lib/models/player');
const Playfield = require('./lib/models/playfield');


try {
    // read config
    const gameConf = JSON.parse(fs.readFileSync('./conf/game3x3.json', 'utf8'));

    // create new playfield with size from config
    let playfield = new Playfield(gameConf.playgroundSize);

    // create new list of players from config
    let listOfPlayer = new Array();
    for (let player of gameConf.players) {
        listOfPlayer.push(new Player(player.name, player.type));
    }

    // init new game
    let game = new Game(playfield, listOfPlayer, gameConf.symbols);

    // start game and init
    game.start();


    // create and start interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'TicTacToe2> '
    });

    rl.prompt();

    // event handler for new line input
    rl.on('line', (line) => {
        if (line === 'quit' || line === 'exit' || line === 'q') {
            process.exit(0);
        } else if (line === 'help') {
            console.log('Please use any of the following commands: quit | exit | q | help ');
        } else {
            //  validate input 
            if (line && line.indexOf(',') > -1) {
                if (!game.move(line)) {
                    process.exit(0);
                }
            } else {
                console.log('Please provide a valid positon by typing x,y');
            }
        }

        rl.prompt();

    }).on('close', () => {
        console.log('Bye bye.');
        process.exit(0);
    });






} catch (error) {
    console.log('An error occured. Will quit. ', error);
    process.exit(0);
}





