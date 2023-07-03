import Ember from 'ember';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class GameAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3000/api/v1/';

  async createGame() {
    try {
      const response = await fetch(`${this.host}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error creating game:', error);
      return null;
    }
  }

  async updateGameState(gameId, move) {
    try {
    const response = await fetch(`${this.host}/games/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ move }),
    });

    const data = await response.json();
    return data;
    } catch (error) {
      console.error('Error creating game:', error);
      return null;
    }
  }
  
}
