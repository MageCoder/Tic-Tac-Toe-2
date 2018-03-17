const should = require('chai').should();
let Game = require('../lib/models/game');

describe('Game', function(){

    it('should exist', function () {
        should.exist(new Game());
      });

});