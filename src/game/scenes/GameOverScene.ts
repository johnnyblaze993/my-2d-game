import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });
  }

  create() {
    this.add.text(400, 200, "Game Over", { fontSize: "48px", color: "#fff" }).setOrigin(0.5);
    const restartButton = this.add.text(400, 300, "Restart", { fontSize: "32px", color: "#fff" }).setOrigin(0.5).setInteractive();
    restartButton.on("pointerdown", () => {
      this.scene.start("MainScene");
    });

    const bestTimes = JSON.parse(sessionStorage.getItem("bestTimes") || "[]");
    bestTimes.sort((a: number, b: number) => b - a);
    this.add.text(400, 400, "Best Times:", { fontSize: "32px", color: "#fff" }).setOrigin(0.5);
    bestTimes.slice(0, 5).forEach((time: number, index: number) => {
      const minutes = Math.floor(time / 60).toString().padStart(2, '0');
      const seconds = (time % 60).toString().padStart(2, '0');
      this.add.text(400, 450 + index * 30, `${index + 1}. ${minutes}:${seconds}`, { fontSize: "24px", color: "#fff" }).setOrigin(0.5);
    });
  }
}
