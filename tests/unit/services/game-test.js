import { module, test } from 'qunit';
import { setupTest } from 'tictactoe/tests/helpers';

module('Unit | Service | game', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:game');
    assert.ok(service);
  });
});
