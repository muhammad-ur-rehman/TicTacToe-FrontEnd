// app/services/game.js
import Service from '@ember/service';
import fetch from 'fetch';
import GameAdapter from 'tictactoe/adapters/game';

export default class GameService extends Service {
  adapter = new GameAdapter();
  async initializeGame() {
    const data = await this.adapter.createGame();
    return { currentstate: this.transformState(data.state) , gameId: data.id };
  }

  transformState(state) {
    return state.split('').map((char) => (char === '-' ? ' ' : char));
  }
}
