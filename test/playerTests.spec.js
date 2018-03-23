'use strict';

const assert = require('chai').assert;
const Player = require('../lib/models/player');

describe('Player', () => {

    let player, name, type;

    beforeEach(function(){
        name = 'Andre';
        type = Player.HUMAN;
        player = new Player(name, type);
    });

    it('should exist', () => {
        assert(Player);
    });

    it('should be possible to create a new player instance', () => {
        assert(player instanceof Object);
    });

    it('should have a name attribute', () => {
        assert(player.name);
    });

    it('should have a type attribute', () => {
        assert(player.type);
    });

});