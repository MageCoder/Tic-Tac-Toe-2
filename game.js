// filereader
const fs = require('fs');

// readline, console interface
const readline = require('readline');

// game classes
const Game = require('./lib/models/game');
const Player = require('./lib/models/player');
const Playfield = require('./lib/models/playfield');



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
        console.log('Please use any of the following commands: start | quit | exit | q | help ');
    } else if (line === 'start') {
        try {
            console.log('Starting new game...');

            // read config
            const gameConf = JSON.parse(fs.readFileSync('./conf/game3x3.json', 'utf8'));

            // create new playfield with size from config
            let playfield = new Playfield(gameConf.playgroundSize);

            // create new list of players from config
            let listOfPlayer = new Array();
            for (let player of gameConf.players) {
                listOfPlayer.push(new Player(player.name, player.type));
            }


            let game = new Game(playfield, listOfPlayer, gameConf.symbols);


        } catch (error) {
            console.log('An error occured. Will quit.');
            process.exit(0);
        }
    }

    rl.prompt();

}).on('close', () => {
    console.log('Bye bye.');
    process.exit(0);
});


