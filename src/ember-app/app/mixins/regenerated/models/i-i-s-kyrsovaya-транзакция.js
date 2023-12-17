import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  билеты: DS.belongsTo('i-i-s-kyrsovaya-билеты', { inverse: null, async: false }),
  клиент_: DS.belongsTo('i-i-s-kyrsovaya-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kyrsovaya-транзакция.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  билеты: {
    descriptionKey: 'models.i-i-s-kyrsovaya-транзакция.validations.билеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент_: {
    descriptionKey: 'models.i-i-s-kyrsovaya-транзакция.validations.клиент_.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Транзакция_E', 'i-i-s-kyrsovaya-транзакция', {
    номер: attr('Номер', { index: 0 }),
    клиент_: belongsTo('i-i-s-kyrsovaya-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: 5 }),
    билеты: belongsTo('i-i-s-kyrsovaya-билеты', 'Билеты', {
      пунктОтпр: attr('Пункт отпр', { index: 3, hidden: true }),
      пунктНазнач: attr('Пункт назначения', { index: 4 })
    }, { index: 1, displayMemberPath: 'пунктОтпр' })
  });

  modelClass.defineProjection('Транзакция_L', 'i-i-s-kyrsovaya-транзакция', {
    номер: attr('Номер', { index: 0 }),
    билеты: belongsTo('i-i-s-kyrsovaya-билеты', 'Пункт отпр', {
      пунктОтпр: attr('Пункт отпр', { index: 1 }),
      пунктНазнач: attr('', { index: 3 })
    }, { index: -1, hidden: true }),
    клиент_: belongsTo('i-i-s-kyrsovaya-клиент', 'Банк счет', {
      банкСчет: attr('Банк счет', { index: 2 }),
      фИО: attr('', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
