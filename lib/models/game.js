'use strict';
/**
 * Tic Tac Toe Game
 * 
 * @class Game
 * @description game tic tac toe 2.0
 * @author André Schubert andre.schubert78@gmail.com
 * @version 1.0.0
 */
class Game {
    constructor(playfield, players, symbols) {
        // init vars
        this.playfield = playfield;
        this.players = players;
        this.symbols = symbols;

        // set number of random starting player
        this.startingPlayer = this._getRandomNumber(players.length);

        // assign given symbols to players
        this._assignSymbolsToPlayers();

        // set moves to zero
        this.moves = 0;
    }

    /* private  */

    /**
     * gets a random number from the given max range
     * @param {number} max 
     */
    _getRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * 
     * @returns {boolean} success
     */
    _assignSymbolsToPlayers() {
        this.players[0].setCurrentSymbol(this.symbols[0]);
        this.players[1].setCurrentSymbol(this.symbols[1]);

        if (this.players.length === 3) {
            this.players[2].setCurrentSymbol(this.symbols[this._getRandomNumber(this.symbols.length)]);
        }
    }


    /* public */

    move() {
        this.moves++;

        if(this.moves === 1){
            console.log(this.players[this.startingPlayer].name + 'Its your turn.');
        } else {

        }
    }
    
};

module.exports = Game;

