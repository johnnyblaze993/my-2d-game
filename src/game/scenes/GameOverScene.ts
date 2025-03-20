import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });
  }

  create() {
    this.add.text(400, 200, "Game Over", { fontSize: "48px", color: "#fff" }).setOrigin(0.5);
    const restartButton = this.add.text(400, 300, "Restart", { fontSize: "32px", color: "#fff" }).setOrigin(0.5).setInteractive();
    restartButton.on("pointerdown", () => {
      this.scene.start("StartScene");
    });
  }
}
