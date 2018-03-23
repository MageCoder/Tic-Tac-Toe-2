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
     * assign given symbols to given players
     * if more than 2 players the third gets a random symbol
     * @returns {boolean} success
     */
    _assignSymbolsToPlayers() {
        this.players[0].setCurrentSymbol(this.symbols[0]);
        this.players[1].setCurrentSymbol(this.symbols[1]);

        if (this.players.length === 3) {
            // this.players[2].setCurrentSymbol(this.symbols[this._getRandomNumber(this.symbols.length)]);
            this.players[2].setCurrentSymbol(this.symbols[2]);
        }
    }


    /* public */

    start() {
        // set number of random starting player
        this.currentPlayer = this._getRandomNumber(this.players.length);

        // assign given symbols to players
        this._assignSymbolsToPlayers();

        console.log('Its your turn ' + this.players[this.currentPlayer].name + '! Your symbol is ' + this.players[this.currentPlayer].currentSymbol);
    }

    /**
     * move game to new round of new player
     * @param {boolean} succes 
     */
    move(position) {
        if (!position) {
            throw 'Position missing!';
        }

        if (this.playfield.allSet()) {
            console.log('Draw! All fields are set and we got no winner!');
            return false;
        } else {

            // TODO: check if current player is the BOT, then do automatic position setting
            // ...

            // set position
            // TODO: error handling
            this.playfield.setPosition(position, this.players[this.currentPlayer].currentSymbol);

            // print out current playfield
            this.playfield.toConsole();

            // check if won
            if (this.playfield.gameOver(position, this.players[this.currentPlayer].currentSymbol)) {
                console.log('Congratulations ' + this.players[this.currentPlayer].name + '! You won the game!');
                return false;
            }        
           
            // get next player
            this.currentPlayer === this.players.length-1 ? this.currentPlayer = 0 : this.currentPlayer++;          
            console.log('Its your turn ' + this.players[this.currentPlayer].name + '! Your symbol is ' + this.players[this.currentPlayer].currentSymbol);
           
            return true;
        }
    }
};

module.exports = Game;

