import Phaser from "phaser";
import MainScene from "./scenes/Mainscene";
import StartScene from "./scenes/StartScene";
import GameOverScene from "./scenes/GameOverScene";

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
  scene: [StartScene, MainScene, GameOverScene],
};

export default gameConfig;
