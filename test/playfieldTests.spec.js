const should = require('chai').should();
let Playfield = require('../lib/models/playfield');

describe('Playfield', function(){

    it('should exist', function () {
        should.exist(new Playfield());
      });

});