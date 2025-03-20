import Phaser from "phaser";

export default class Ekans extends Phaser.Physics.Arcade.Sprite {
  speed: number = 100;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "ekans");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.09);
    this.setCollideWorldBounds(true);
    this.setVelocityX(this.speed);
  }

  update() {
    if (this.x >= 750) {
      this.setVelocityX(-this.speed);
      this.increaseSpeed();
    } else if (this.x <= 50) {
      this.setVelocityX(this.speed);
      this.increaseSpeed();
    }
  }

  increaseSpeed() {
    this.speed += 10;
  }
}
