// this is a hack
// and vscode still does not look like it does
// the parse to help out with intellisense
// :(
import { Phaser } from "./fakephaser.js";
import { GameStack } from "./gamestack.js";

class GameScene extends Phaser.Scene {
    constructor() {
        super("game");
    }

    preload() {

        // these images must be loaded
        // for GameStack to work
        let ts = "PNG/default_128/";
        this.load.image("cards", ts+"cards.png");
        this.load.image("heavy", ts+"heavy.png");
        this.load.image("hourglass",ts+"hourglass.png");
        this.load.image("blank_panel",ts+"blank_panel.png");
    }

    create() {

        this.gamestack = new GameStack(this,128,128);
        this.gamestack0 = new GameStack(this,0,0);

    }
}

function main() {
    let gameConfig = {
        width : 400,
        height : 400,
        scene : GameScene
    }
    let game = new Phaser.Game(gameConfig);
}

window.onload = main;