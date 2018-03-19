'use strict';

/**
 * Tic Tac Toe Playfield
 */
class Playfield {

    constructor(size) {
        /**
         * size of playfield needs to be between 3 to 10, if not reset
         */
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
     * pseudo private function signed by _ to build the playfield
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
     */
    toConsole() {

        // TODO:
        // flipp playfield, because coordinates start at bottom left
        // this.playfield.reverse();


        console.log();
        console.log();
        console.log('Playfield Tic Tac Toe 2.0');
        console.log('______________________________________');
        console.log();
        console.log();

        for (let y = 0; y < this.playfield.length; y++) {
            let row = '';
            for (let x = 0; x < this.playfield[y].length; x++) {
                let out = this.playfield[y][x] ? this.playfield[y][x] : '_';
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
     * check if given position exist in playfield
     * @param {string} position - expected format for example 1,3 
     */
    existsPosition(position) {
        if (position) {
            let y = position.split(',')[0];
            let x = position.split(',')[1];

            // just check if position is within field size
            if (x * y < this.playfield.length * this.playfield.length) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }




}



module.exports = Playfield;