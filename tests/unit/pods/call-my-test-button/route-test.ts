import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | call-my-test-button', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:call-my-test-button');
    assert.ok(route);
  });
});
