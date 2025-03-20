import Phaser from "phaser";

export default class Slowpoke extends Phaser.Physics.Arcade.Sprite {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "slowpoke");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.05);
    this.setCollideWorldBounds(true);
    this.setBounce(0.2);
  }

  handleInput(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (cursors.left?.isDown) {
      this.setVelocityX(-200);
    } else if (cursors.right?.isDown) {
      this.setVelocityX(200);
    } else {
      this.setVelocityX(0);
    }

    if (cursors.up?.isDown && this.body?.blocked.down) {
      this.setVelocityY(-300);
    }
  }

  flash() {
    this.scene.tweens.add({
        targets: this,
        alpha: 0.5,
        ease: "Linear",
        duration: 100,
        repeat: 5,
        yoyo: true,
        onComplete: () => {
          this.alpha = 1;
        }
    });
  }
}
