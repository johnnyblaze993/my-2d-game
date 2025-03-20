import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  preload() {
    this.load.image("startButton", "/start-button.png");
    this.load.image("slowpoke", "/Slowpoke-Pokemon-PNG-Picture.png");
    this.load.image("ekans", "/ekans.png");
  }

  create() {
    const startButton = this.add.image(400, 300, "startButton").setInteractive();
    startButton.on("pointerdown", () => {
      this.scene.start("MainScene");
    });

    this.add.text(400, 200, "My 2D Game", { fontSize: "48px", color: "#fff" }).setOrigin(0.5);
  }
}
