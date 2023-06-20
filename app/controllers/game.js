// app/controllers/game.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default class GameController extends Controller {
  @service game;
  @tracked currentstate = null;
  @tracked message = null;
  @tracked gameId = null;

  constructor() {
    super(...arguments);
    this.initializeGame();
  }

  @action
  async handleClick(id) {
    try {
      const data = await this.game.adapter.updateGameState(this.gameId, id);
      this.currentstate = this.game.transformState(data.game.state);
      this.message = data.message;

      if (this.message) {
        next(() => {
          alert(this.message);
          this.resetGame();
        });
      }
    } catch (error) {
      console.error('Error updating game state:', error);
    }
  }

  @action
  resetGame() {
    this.currentstate = null;
    this.gameId = null;
    this.message = null;
    this.initializeGame();
  }

  async initializeGame() {
    const { currentstate, gameId } = await this.game.initializeGame();
    this.currentstate = currentstate;
    this.gameId = gameId;
  }
}
