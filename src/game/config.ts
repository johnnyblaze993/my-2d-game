import Phaser from "phaser";
import MainScene from "./scenes/Mainscene";

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 500, x: 0},
    },
  },
  scene: MainScene,
};

export default gameConfig;
