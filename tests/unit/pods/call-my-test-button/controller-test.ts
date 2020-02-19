import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | call-my-test-button', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:call-my-test-button');
    assert.ok(controller);
  });
});
