import Phaser from "phaser";

export default class Ekans extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "ekans");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.09);
    this.setCollideWorldBounds(true);
    this.setVelocityX(100);
  }

  update() {
    if (this.x >= 750) {
      this.setVelocityX(-100);
    } else if (this.x <= 50) {
      this.setVelocityX(100);
    }
  }
}
