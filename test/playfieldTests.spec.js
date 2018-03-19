const assert = require('chai').assert;
let Playfield = require('../lib/models/playfield');

describe('Playfield', function () {

    let playfield, size;
    
    beforeEach(function(){
        size = 3;
        playfield = new Playfield(size);
    });

    it('should exist', function () {
        assert(Playfield);
    });

    it('should be possible to create a new Playfield instance', function(){
        assert(playfield instanceof Object);
    });

    it('should have a size attribute', function(){
        assert(playfield.size);
    });

    it('should be possible to create a new Playfield instance with size of rows and columns', function(){
        assert.equal(playfield.size, size);
    });

    it('should have a size attribute that is not allowed to be lower than 3 ', function(){
        let playfield2 = new Playfield(2);
        assert.isAtLeast(playfield2.size, 3);
    });

    it('should have a size attribute that is not allowed to be greater than 10 ', function(){
        let playfield11 = new Playfield(11);
        assert.isAtMost(playfield11.size, 10);
    });

    it('should have a printField function', function(){
        assert(playfield.toConsole instanceof Function);
    });

    it('should print the Playfield to the console', function(){
        assert.isTrue(playfield.toConsole());
    });

    it('should have a existsPosition function', function(){
        assert(playfield.existsPosition instanceof Function);
    });

    it('should check if given position exists',function(){
        let position = '1,2';
        assert.isTrue(playfield.existsPosition(position));
    });

});