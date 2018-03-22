'use strict';

/**
 * Tic Tac Toe Playfield
 * 
 * @class Playfield
 * @description playfield of the game tic tac toe 2.0
 * @author André Schubert andre.schubert78@gmail.com
 * @version 1.0.0
 */
class Playfield {
    constructor(size) {
        //size of playfield needs to be between 3 to 10, if not reset
        if (size < 3) {
            size = 3;
        } else if (size > 10) {
            size = 10;
        }

        this.size = size;

        this._buildField();
    }

    /** private */

    /**
     * pseudo private function signed by _ 
     * to build the playfield
     */
    _buildField() {

        this.playfield = new Array(this.size);
        for (let x = 0; x < this.playfield.length; x++) {
            this.playfield[x] = new Array(this.size);
        }
    }


    /** public  */

    /**
     * print playfield to console
     * @returns {boolean}
     */
    toConsole() {
        // flipp playfield, because coordinates start at bottom left
        let field = JSON.parse(JSON.stringify(this.playfield));
        field.reverse();

        console.log();
        console.log();
        console.log('Playfield Tic Tac Toe 2.0');
        console.log('______________________________________');
        console.log();
        console.log();

        for (let y = 0; y < field.length; y++) {
            let row = '';
            for (let x = 0; x < field[y].length; x++) {
                let out = field[y][x] ? field[y][x] : '_';
                row += '|' + out + '|';
            }
            console.log(row);
        }

        console.log();
        console.log();
        console.log('Playfield size ' + this.size + 'x' + this.size);
        console.log('______________________________________');

        return true;
    }

    /**
     * get value of field on given position
     * @param {string} position 
     * @returns {string} value on position or undefined
     */
    getPosition(position) {
        if (position) {
            let x = position.split(',')[0];
            let y = position.split(',')[1];

            if (x > this.size || y > this.size) {
                return null;
            } else {
                return this.playfield[y - 1][x - 1];
            }
        } else {
            return null;
        }
    }


    /**
     * set given symbol on given position
     * @param {string} position 
     * @param {string} symbol 
     */
    setPosition(position, symbol) {
        // input given?
        if (position && symbol) {
            // check that position is not set allready and that playfield is not full
            if (this.getPosition(position) === undefined && !this.allSet()) {
                let x = position.split(',')[0];
                let y = position.split(',')[1];

                // check that position is available on field
                if (x > this.size || y > this.size) {
                    return false;
                } else {
                    // set symbol on playfield
                    this.playfield[y - 1][x - 1] = symbol;
                    return true;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * check that playfield is not completely filled 
     * otherwise the game should be over
     * @returns {boolean}
     */
    allSet() {
        let counter = 0;

        for (let y = 0; y < this.playfield.length; y++) {
            for (let x = 0; x < this.playfield[y].length; x++) {
                if (this.playfield[y][x]) {
                    counter++;
                }
            }
        }

        if (this.size * this.size === counter) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * checks if game is over by a winning combination
     * @returns {boolean} game over
     */
    gameOver(position, symbol) {

        if(!position || !symbol){
            return false;
        }

        let found = true;
        let x = position.split(',')[0] - 1;
        let y = position.split(',')[1] - 1;

        if(x > this.size || y > this.size){
            return false;
        }

        // check if there is a winning combination
        // check for a winning column
        for (let i = 0; i < this.size; i++) {
            if (this.playfield[i][x] !== symbol) {
                found = false;
                break;
            }
        }

        if(found) {
            return found;
        }
        else {
            found = true;
        }



        // check for a winning row
        for (let i = 0; i < this.size; i++) {
            if (this.playfield[y][i] !== symbol) {
                found = false;
                break;
            }
        }

        if(found) {
            return found;
        }
        else {
            found = true;
        }



        // check for a winning diagonal x,y = 0 from bottom left to top right
        for (let i = 0, j = 0; i < this.size; i++) {
            if (this.playfield[i][j++] !== symbol) {
                found = false;
                break;
            }
        }

        if(found) {
            return found;
        }
        else {
            found = true;
        }



        // check for a winning diagonal x = size,y = 0 from bottom right to top left
        for (let i = this.size - 1, j = 0; i >= 0; i--) {
            if (this.playfield[j++][i] !== symbol) {
                found = false;
                break;
            }
        }
        
        return found;
    }


}



module.exports = Playfield;