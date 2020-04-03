import '../src/assets/css/main.scss';

import * as Phaser from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
    // private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private player: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super(sceneConfig);
    }

    public create() {
        // this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
        // this.physics.add.existing(this.square);

        this.player = this.physics.add.sprite(200, 200, 'tank_a_body');
        this.player.setCollideWorldBounds(true);

        this.anims.create({
           key: 'tank_move',
           frames: this.anims.generateFrameNumbers('tank_a_body', { start: 0, end: 1 }),
           frameRate: 1,
           repeat: -1
        });

        this.anims.create({
           key: 'tank_turn_right',
           frames: this.anims.
        });
    }

    preload() {
        this.load.spritesheet('tank_a_body','assets/images/tanks/tank_a_body.png', { frameWidth: 29, frameHeight: 29});
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {

            if(cursorKeys.right.isDown) {


            } else if(cursorKeys.left.isDown) {

            } else {
                this.player.setVelocityY(-100);
                this.player.setAngle(0);
                this.player.anims.play('tank_move');
            }
        } else if (cursorKeys.down.isDown) {
            this.player.setVelocityY(100);
            this.player.setAngle(180);
            this.player.anims.play('tank_move');
        } else {
            this.player.setVelocityY(0);
        }

        if (cursorKeys.right.isDown) {
            this.player.setVelocityX(100);
            this.player.setAngle(90);
            this.player.anims.play('tank_move');
        } else if (cursorKeys.left.isDown) {
            this.player.setVelocityX(-100);
            this.player.setAngle(270);
            this.player.anims.play('tank_move');
        } else {
            this.player.setVelocityX(0);
        }

    }
}


const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#000000',
    scene: GameScene
};

export const game = new Phaser.Game(gameConfig);
