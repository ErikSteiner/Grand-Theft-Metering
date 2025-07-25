import Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

let player;
let cursors;
let installing = false;
let installProgress = 0;
let progressBar;

function preload() {
}

function create() {
    // create simple rooms
    this.add.rectangle(400, 300, 780, 580, 0xcccccc);
    this.add.rectangle(400, 150, 760, 280, 0xeeeeee).setStrokeStyle(2, 0x000000);
    this.add.rectangle(400, 450, 760, 280, 0xeeeeee).setStrokeStyle(2, 0x000000);

    // door locations for apartments
    this.add.rectangle(150, 300, 40, 80, 0x888888);
    this.add.rectangle(400, 300, 40, 80, 0x888888);
    this.add.rectangle(650, 300, 40, 80, 0x888888);

    // player setup
    player = this.physics.add.rectangle(400, 550, 32, 32, 0x0000ff);
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    progressBar = this.add.rectangle(400, 30, 200, 20, 0x00ff00).setScale(0, 1);
}

function update(time, delta) {
    const speed = 200;

    if (!installing) {
        player.body.setVelocity(0);
        if (cursors.left.isDown) {
            player.body.setVelocityX(-speed);
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(speed);
        }
        if (cursors.up.isDown) {
            player.body.setVelocityY(-speed);
        } else if (cursors.down.isDown) {
            player.body.setVelocityY(speed);
        }
        if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
            // start installation if near a door
            if (Math.abs(player.x - 150) < 40 || Math.abs(player.x - 400) < 40 || Math.abs(player.x - 650) < 40) {
                installing = true;
                installProgress = 0;
                player.body.setVelocity(0);
            }
        }
    } else {
        installProgress += delta;
        progressBar.setScale(installProgress / 5000, 1);
        if (installProgress >= 5000) {
            installing = false;
            progressBar.setScale(0, 1);
            console.log('Installation complete');
        }
    }
}

new Phaser.Game(config);
