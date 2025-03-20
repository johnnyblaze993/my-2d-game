import Phaser from "phaser";
import Slowpoke from "../entities/slowpoke";
import Ekans from "../entities/ekans";

export default class MainScene extends Phaser.Scene {
  slowpoke!: Slowpoke;
  ekans!: Ekans;
  hearts!: Phaser.GameObjects.Text;
  heartCount: number = 3;
  lastHitTime: number = 0;
  hitCooldown: number = 2000; // 2s cooldown

  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  preload() {
    this.load.image("slowpoke", "/Slowpoke-Pokemon-PNG-Picture.png");
    this.load.image("ekans", "/ekans.png");
  }

  create() {
    this.slowpoke = new Slowpoke(this, 400, 500);
    this.ekans = new Ekans(this, 800, 480);
    
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Hearts UI
    this.hearts = this.add.text(20, 20, "❤️❤️❤️", { fontSize: "32px", color: "red" });

    // Collision Detection
    this.physics.add.overlap(this.slowpoke, this.ekans, this.handleCollision, undefined, this);
  }

  handleCollision() {
    const currentTime = this.time.now;
    if (currentTime - this.lastHitTime > this.hitCooldown) {
      if (this.heartCount > 0) {
        this.heartCount--;
        this.hearts.setText("❤️".repeat(this.heartCount));
        this.lastHitTime = currentTime;
      }
    }
  }

  update() {
    this.slowpoke.handleInput(this.cursors);
    this.ekans.update();
  }
}
