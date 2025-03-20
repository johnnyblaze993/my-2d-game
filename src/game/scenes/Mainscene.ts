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
  timerText!: Phaser.GameObjects.Text;
  startTime!: number;

  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    this.load.image("slowpoke", "/Slowpoke-Pokemon-PNG-Picture.png");
    this.load.image("ekans", "/ekans.png");
  }

  create() {
    // Reset game state
    this.heartCount = 3;
    this.lastHitTime = 0;

    this.slowpoke = new Slowpoke(this, 400, 500);
    this.ekans = new Ekans(this, 800, 480);
    
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Hearts UI
    this.hearts = this.add.text(20, 20, "❤️❤️❤️", { fontSize: "32px", color: "red" });

    // Timer UI
    this.timerText = this.add.text(20, 60, "Time: 00:00", { fontSize: "32px", color: "#fff" });
    this.startTime = this.time.now;

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
        this.slowpoke.flash();
      }
      if (this.heartCount === 0) {
        const elapsedTime = Math.floor((this.time.now - this.startTime) / 1000);
        const bestTimes = JSON.parse(sessionStorage.getItem("bestTimes") || "[]");
        bestTimes.push(elapsedTime);
        sessionStorage.setItem("bestTimes", JSON.stringify(bestTimes));
        this.scene.start("GameOverScene");
      }
    }
  }

  update() {
    this.slowpoke.handleInput(this.cursors);
    this.ekans.update();
    const elapsedTime = Math.floor((this.time.now - this.startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    this.timerText.setText(`Time: ${minutes}:${seconds}`);
  }
}
