import { useEffect, useRef } from "react";
import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  slowpoke!: Phaser.Physics.Arcade.Sprite;
  ekans!: Phaser.Physics.Arcade.Sprite;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  preload() {
    this.load.image("slowpoke", "/Slowpoke-Pokemon-PNG-Picture.png");
    this.load.image("ekans", "/ekans.png");
  }

  create() {
    this.slowpoke = this.physics.add.sprite(400, 450, "slowpoke").setScale(0.05);
    this.slowpoke.setCollideWorldBounds(true);
    
    this.ekans = this.physics.add.sprite(800, 480, "ekans").setScale(0.09);
    this.ekans.setCollideWorldBounds(true);
    
    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }
  }

  update() {
    if (this.cursors.left.isDown) {
      this.slowpoke.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.slowpoke.setVelocityX(200);
    } else {
      this.slowpoke.setVelocityX(0);
    }
  }
}

const Game = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameRef.current) return;
    
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      scene: MainScene,
    };
    
    const game = new Phaser.Game(config);
    return () => game.destroy(true);
  }, []);

  return <div ref={gameRef} style={{ width: "800px", height: "600px" }} />;
};

export default Game;
