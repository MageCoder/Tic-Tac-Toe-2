'use strict';

const assert = require('chai').assert;
const Playfield = require('../lib/models/playfield');

describe('Playfield', () => {

    let playfield, size;

    beforeEach(() => {
        size = 3;
        playfield = new Playfield(size);
    });

    it('should exist', () => {
        assert(Playfield);
    });

    it('should be possible to create a new Playfield instance', () => {
        assert(playfield instanceof Object);
    });

    it('should have a size attribute', () => {
        assert(playfield.size);
    });

    it('should be possible to create a new Playfield instance with size of rows and columns', () => {
        assert.equal(playfield.size, size);
    });

    it('should have a size attribute that is not allowed to be lower than 3 ', () => {
        let playfield2 = new Playfield(2);
        assert.isAtLeast(playfield2.size, 3);
    });

    it('should have a size attribute that is not allowed to be greater than 10 ', () => {
        let playfield11 = new Playfield(11);
        assert.isAtMost(playfield11.size, 10);
    });

    it('should have a printField function', () => {
        assert(playfield.toConsole instanceof Function);
    });

    it('should print the Playfield to the console', () => {
        assert.isTrue(playfield.toConsole());
    });

    it('should have a getPosition function', () => {
        assert(playfield.getPosition instanceof Function);
    });

    it('should check if given position exists and returns a value', () => {
        assert.isNotNull(playfield.getPosition('1,3'));
    });

    it('should return null if position does not exist', () => {
        assert.isNull(playfield.getPosition('1,4'));
    });

    it('should have a getEmptyPosition function', () => {
        assert.isFunction(playfield.getEmptyPosition);
    });

    it('should have a setPosition function', () => {
        assert(playfield.setPosition instanceof Function);
    });

    it('should set the given symbol at the given position', () => {
        assert.isTrue(playfield.setPosition('1,3', 'X'));
    });

    it('should not set the given symbol at the given position if position is outside of the playfield', () => {
        assert.isFalse(playfield.setPosition('1,4', 'X'));
    });

    it('should get the correct symbol that was set previously', () => {
        let symbol = 'X';
        playfield.setPosition('1,3', symbol);
        let result = playfield.getPosition('1,3');

        assert.equal(result, symbol);
    });

    it('should have a allSet function', () => {
        assert(playfield.allSet instanceof Function);
    });

    it('should figure out if all postions are set', () => {
        playfield.setPosition('1,1', 'X');
        playfield.setPosition('2,2', 'X');
        playfield.setPosition('3,3', 'X');
        assert.isFalse(playfield.allSet());
    });

    it('should give a true if all postions are set', () => {
        for (let y = 1; y <= size; y++) {
            for (let x = 1; x <= size; x++) {
                playfield.setPosition(y + ',' + x, 'X');
            }
        }

        assert.isTrue(playfield.allSet());
    });

    it('should have a gameOver function', () => { 
        assert.isFunction(playfield.gameOver);
    });

    it('should be true if game is won', () => { 
        
        // playfield.setPosition('1,1', 'X');
        // playfield.setPosition('1,2', 'X');
        // playfield.setPosition('1,3', 'X');

        // playfield.setPosition('1,1', 'X');
        // playfield.setPosition('2,1', 'X');
        // playfield.setPosition('3,1', 'X');
        
        // playfield.setPosition('1,1', 'X');
        // playfield.setPosition('2,2', 'X');
        // playfield.setPosition('3,3', 'X');

        playfield.setPosition('3,1', 'X');
        playfield.setPosition('2,2', 'X');
        playfield.setPosition('1,3', 'X');

        playfield.toConsole();
      
        assert.isTrue(playfield.gameOver('3,1', 'X'));
    });

    it('should be false if game is not won', () => { 
        playfield.setPosition('3,1', 'X');
        playfield.setPosition('2,2', 'O');
        playfield.setPosition('1,3', 'X');

        playfield.toConsole();
      
        assert.isFalse(playfield.gameOver('1,1', 'X'));
    });

});