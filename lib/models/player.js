'use strict';


const HUMAN = 'human';
const BOT = 'bot';

/**
 * Tic Tac Toe Player
 * 
 * @class Player
 * @description player of the game tic tac toe 2.0
 * @author André Schubert andre.schubert78@gmail.com
 * @version 1.0.0
 */
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    static get HUMAN() {
        return HUMAN;
    }

    static get BOT() {
        return bot;
    }

    getGame(){
        return this.gameRef;
    }

    setGame(gameRef){
        this.gameRef = gameRef;
        return true;
    }
};

module.exports = Player;