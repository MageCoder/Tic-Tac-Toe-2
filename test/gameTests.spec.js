const assert = require('chai').assert;
let Game = require('../lib/models/game');

describe('Game', function () {

    it('should exist', function () {
        assert(Game);
    });

    it('should be possible to create a new game instance with playfield, player and game symbols', function(){
        const game = new Game({}, {}, {});
        assert(game instanceof Object);
    });

});