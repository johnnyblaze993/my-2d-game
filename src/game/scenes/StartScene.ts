import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  create() {
    const startButton = this.add.text(400, 300, "Start Game", { fontSize: "32px", color: "#fff" }).setOrigin(0.5).setInteractive();
    startButton.on("pointerdown", () => {
      this.scene.start("MainScene");
    });

    this.add.text(400, 200, "Jumpy Jump", { fontSize: "48px", color: "#fff" }).setOrigin(0.5);
  }
}
