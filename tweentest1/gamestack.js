// this is a hack
// and vscode still does not look like it does
// the parse to help out with intellisense
// :(
import { Phaser } from "./fakephaser.js";

class Stack {
    constructor() {
        this.data = [];
    }
    push(card) {
        this.data.push(card);
    }
    pop() {
        this.data.pop();
    }
    top() {
        return this.data[this.data.length-1];
    }
    length() {
        return this.data.length;
    }
}

class GameStack extends Phaser.GameObjects.Sprite {
    tony_click_handler(pointer,localx,localy,event) {
        
        // pop the data structure
        // if it is not empty
        if (this.sdata.length()==0) {
            return;
        }

        // create the tween
        let tw = this.scene.tweens.add({
            targets : this,
            scale : 1.1,
            ease : "Linear",
            duration : 100,
            repeat : false,
            onComplete : () => {

                // pop the data
                this.sdata.pop();
                
                // TODO: NOTE
                // the extra setScale
                // makes me think that I need to destroy
                // the texture object
                
                if (this.sdata.data.length==0) {
                    this.setTexture("blank_panel");
                    this.setScale(1);
                } else {
                    // just changing texture do i need to
                    // get rid of the old texture?
                    console.log("changing texture now");
                    this.setTexture(this.sdata.top());
                    this.setScale(1);
                }

            } // onComplete end
        });

    }

    constructor(scene,x,y) {
        super(scene,x,y);
        // set to top left corner
        this.setOrigin(0,0);
        scene.add.existing(this); // add to display list
        
        // create data struct
        this.sdata = new Stack();
        for(let i=0;i<5;i++) {
            let p = Phaser.Math.Between(0,2);
            if (p==0) {
                this.sdata.push("cards");
            } else if (p==1) {
                this.sdata.push("heavy");
            } else {
                this.sdata.push("hourglass");
            }
        }
        // setup textture
        this.setTexture(this.sdata.top());
        
        // make interactive to handle mouse clicks
        this.setInteractive(
            new Phaser.Geom.Rectangle(0,0,128,128),
            Phaser.Geom.Rectangle.Contains)
            .on("pointerup",this.tony_click_handler,this);
    }
}

export { GameStack };