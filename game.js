let Playfield = require('./lib/models/playfield');

let playfield = new Playfield(3);


console.log(playfield.setPosition('1,3', 'O'));
console.log(playfield.setPosition('2,3', 'X'));
console.log(playfield.setPosition('3,3', 'O'));

playfield.toConsole();



