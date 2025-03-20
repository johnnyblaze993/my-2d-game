import { useEffect, useRef } from "react";
import Phaser from "phaser";
import gameConfig from "../game/config";

const Game = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Game component mounted");
    if (!gameRef.current) return;

    const game = new Phaser.Game({
      ...gameConfig,
      parent: gameRef.current,
    });

    return () => game.destroy(true);
  }, []);

  return <div ref={gameRef} style={{ width: "800px", height: "600px" }} />;
};

export default Game;
