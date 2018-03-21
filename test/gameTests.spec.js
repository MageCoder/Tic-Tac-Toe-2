const assert = require('chai').assert;
let Game = require('../lib/models/game');
let Playfield = require('../lib/models/playfield');
let Player = require('../lib/models/player');

describe('Game', () => {

    let game, playfield, listOfPlayers, listOfSymbols;

    beforeEach(() => {
        playfield = new Playfield('6');

        let listOfPlayer = new Array();
        listOfPlayer.push(new Player('Andre', Player.HUMAN));
        listOfPlayer.push(new Player('Peet', Player.HUMAN));
        listOfPlayer.push(new Player('Rob', Player.BOT));

        let listOfSymbols = new Array();
        listOfSymbols.push('A');
        listOfSymbols.push('B');

        game = new Game(playfield, listOfPlayer, listOfSymbols);
    });


    it('should exist', () => {
        assert(Game);
    });

    it('should be possible to create a new game instance with playfield, player and game symbols', () => {
        assert(game instanceof Object);
    });

    it('should have a playfield attribute', () => {
        assert(game.playfield);
    });

    it('should have a players attribute', () => {
        assert(game.players);
    });

    it('should have a symbols attribute', () => {
        assert(game.symbols);
    });

});