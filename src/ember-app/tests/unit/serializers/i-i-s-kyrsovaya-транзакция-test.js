import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrsovaya-транзакция', 'Unit | Serializer | i-i-s-kyrsovaya-транзакция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrsovaya-транзакция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
