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

    /**
     * const HUMAN
     */
    static get HUMAN() {
        return HUMAN;
    }

    /**
     * const BOT
     */
    static get BOT() {
        return bot;
    }

    /**
     * get current game reference
     * @returns {string} game reference
     */
    getGameReference(){
        return this.gameRef;
    }

    /**
     * set current game reference
     * @param {string} game reference 
     * @returns {boolean} success
     */
    setGameReference(gameRef){
        this.gameRef = gameRef;
        return true;
    }

    /**
     * reset game reference
     * @returns null
     */
    resetGameReference(){
        return this.gameRef = null;
    }
};

module.exports = Player;