const assert = require('chai').assert;
let Playfield = require('../lib/models/playfield');

describe('Playfield', function () {

    let playfield, size;

    beforeEach(function () {
        size = 3;
        playfield = new Playfield(size);
    });

    it('should exist', function () {
        assert(Playfield);
    });

    it('should be possible to create a new Playfield instance', function () {
        assert(playfield instanceof Object);
    });

    it('should have a size attribute', function () {
        assert(playfield.size);
    });

    it('should be possible to create a new Playfield instance with size of rows and columns', function () {
        assert.equal(playfield.size, size);
    });

    it('should have a size attribute that is not allowed to be lower than 3 ', function () {
        let playfield2 = new Playfield(2);
        assert.isAtLeast(playfield2.size, 3);
    });

    it('should have a size attribute that is not allowed to be greater than 10 ', function () {
        let playfield11 = new Playfield(11);
        assert.isAtMost(playfield11.size, 10);
    });

    it('should have a printField function', function () {
        assert(playfield.toConsole instanceof Function);
    });

    it('should print the Playfield to the console', function () {
        assert.isTrue(playfield.toConsole());
    });

    it('should have a getPosition function', function () {
        assert(playfield.getPosition instanceof Function);
    });

    it('should check if given position exists and returns a value', function () {
        assert.isNotNull(playfield.getPosition('1,3'));
    });

    it('should return null if position does not exist', function () {
        assert.isNull(playfield.getPosition('1,4'));
    });

    it('should have a setPosition function', function () {
        assert(playfield.setPosition instanceof Function);
    });

    it('should set the given symbol at the given position', function () {
        assert.isTrue(playfield.setPosition('1,3', 'X'));
    });

    it('should not set the given symbol at the given position if position is outside of the playfield', function () {
        assert.isFalse(playfield.setPosition('1,4', 'X'));
    });

    it('should get the correct symbol that was set previously', function () {
        let symbol = 'X';
        playfield.setPosition('1,3', symbol);
        let result = playfield.getPosition('1,3');

        assert.equal(result, symbol);
    });

    it('should have a allSet function', function () {
        assert(playfield.allSet instanceof Function);
    });

    it('should figure out if all postions are set', function () {
        playfield.setPosition('1,1', 'X');
        playfield.setPosition('2,2', 'X');
        playfield.setPosition('3,3', 'X');
        assert.isFalse(playfield.allSet());
    });

    it('should give a true if all postions are set', function () {
        for (let y = 1; y <= size; y++) {
            for (let x = 1; x <= size; x++) {
                playfield.setPosition(y + ',' + x, 'X');
            }
        }

        playfield.toConsole();

        assert.isTrue(playfield.allSet());
    });

});