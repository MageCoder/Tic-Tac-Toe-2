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

    it('should have a getPosition function', function(){
        assert(playfield.getPosition instanceof Function);
    });

    it('should check if given position exists and returns a value',function(){
        assert.isNotNull(playfield.getPosition('1,3'));
    });

    it('should have a setPosition function', function(){
        assert(playfield.setPosition instanceof Function);
    });

    it('should have a areAllPositionsSet function', function(){
        assert(playfield.areAllPositionsSet instanceof Function);
    });

});