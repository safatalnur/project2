import './styles/game.css';
import Game from './partials/Game';

// const game = new Game('game', 1024, 512);
const game = new Game('game', 1024, 512);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);

  
})();
