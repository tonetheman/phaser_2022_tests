
import Phaser from "phaser";

let W = 600;
let H = 800;
let game = null;
let gameConfig = {
    width : W,
    height : H,
    scene : []
};

class GameScene extends Phaser.Scene {
    constructor() {
        super("game");
    }
    preload() {

    }
    create() {
        console.log("hey from createa");
    }
}

function main() {
    console.log("hey from main");
    // have to do it like this
    // for lexical js issues
    gameConfig.scene.push(GameScene);
    game = new Phaser.Game(gameConfig);
}

window.onload = main;