const assert = require('chai').assert;
let Player = require('../lib/models/player');

describe('Player', function () {

    let player, name, type;

    beforeEach(function(){
        name = 'Andre';
        type = Player.HUMAN;
        player = new Player(name, type);
    });

    it('should exist', function () {
        assert(Player);
    });

    it('should be possible to create a new player instance', function () {
        assert(player instanceof Object);
    });

    it('should have a name attribute', function () {
        assert(player.name);
    });

    it('should have a type attribute', function () {
        assert(player.type);
    });
    
    it('should have a get game function', function () {
        assert(player.getGame instanceof Function);
    });

    it('should have a set game function', function () {
        assert(player.setGame instanceof Function);
    });

    it('should have a game reference attribute', function () {
        player.setGame('G0815');
        console.log(player.gameRef);
        assert(player.gameRef);
    });

});