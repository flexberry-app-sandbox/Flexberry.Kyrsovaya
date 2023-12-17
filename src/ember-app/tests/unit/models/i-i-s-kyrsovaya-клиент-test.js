import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrsovaya-клиент', 'Unit | Model | i-i-s-kyrsovaya-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyrsovaya-билет-касса',
    'model:i-i-s-kyrsovaya-билет',
    'model:i-i-s-kyrsovaya-билеты',
    'model:i-i-s-kyrsovaya-клиент',
    'model:i-i-s-kyrsovaya-перевозчик',
    'model:i-i-s-kyrsovaya-транзакция',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
