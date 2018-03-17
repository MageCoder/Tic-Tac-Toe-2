const should = require('chai').should();
let Player = require('../lib/models/player');

describe('Player', function(){

    it('should exist', function () {
        should.exist(new Player());
      });

});