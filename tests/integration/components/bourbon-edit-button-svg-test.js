import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bourbon-edit-button-svg', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bourbon-edit-button-svg}}`);

    assert.equal(this.element.textContent.trim(), '.st0 {fill: #222222;}');

    // // Template block usage:
    // await render(hbs`
    //   {{#bourbon-edit-button-svg}}
    //     template block text
    //   {{/bourbon-edit-button-svg}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
