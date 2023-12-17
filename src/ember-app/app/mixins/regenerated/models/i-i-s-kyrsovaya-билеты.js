import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПокупки: DS.attr('string'),
  датаПоездки: DS.attr('date'),
  датаПокупки: DS.attr('date', { defaultValue() { return new Date(); } }),
  место: DS.attr('number'),
  пунктНазнач: DS.attr('string'),
  пунктОтпр: DS.attr('string'),
  билетКасса: DS.belongsTo('i-i-s-kyrsovaya-билет-касса', { inverse: null, async: false }),
  клиент_: DS.belongsTo('i-i-s-kyrsovaya-клиент', { inverse: null, async: false }),
  перевозчик: DS.belongsTo('i-i-s-kyrsovaya-перевозчик', { inverse: null, async: false })
});

export let ValidationRules = {
  времяПокупки: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.времяПокупки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПоездки: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.датаПоездки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаПокупки: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.датаПокупки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.место.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пунктНазнач: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.пунктНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктОтпр: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.пунктОтпр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  билетКасса: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.билетКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент_: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.клиент_.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  перевозчик: {
    descriptionKey: 'models.i-i-s-kyrsovaya-билеты.validations.перевозчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БилетыE', 'i-i-s-kyrsovaya-билеты', {
    датаПокупки: attr('Дата покупки', { index: 0 }),
    времяПокупки: attr('Время покупки', { index: 1 }),
    датаПоездки: attr('Дата поездки', { index: 2 }),
    пунктОтпр: attr('Пункт отправления', { index: 3 }),
    пунктНазнач: attr('Пункт назначения', { index: 4 }),
    перевозчик: belongsTo('i-i-s-kyrsovaya-перевозчик', 'Наименование', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 12, hidden: true }),
    место: attr('Место', { index: 6 }),
    клиент_: belongsTo('i-i-s-kyrsovaya-клиент', 'Покупатель', {
      фИО: attr('ФИО покупателя', { index: 8 }),
      банкСчет: attr('Банковский счет', { index: 9, hidden: true })
    }, { index: 7, displayMemberPath: 'банкСчет' }),
    билетКасса: belongsTo('i-i-s-kyrsovaya-билет-касса', 'Билет касса', {
      наименование: attr('Место расчета', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('БилетыL', 'i-i-s-kyrsovaya-билеты', {
    пунктОтпр: attr('Пункт отпр', { index: 0 }),
    датаПоездки: attr('Дата поездки', { index: 1 }),
    датаПокупки: attr('Дата покупки', { index: 2 }),
    место: attr('Место', { index: 3 }),
    пунктНазнач: attr('Пункт назнач', { index: 4 }),
    времяПокупки: attr('Время покупки', { index: 5 }),
    клиент_: belongsTo('i-i-s-kyrsovaya-клиент', 'Банк счет', {
      банкСчет: attr('Банк счет', { index: 6 }),
      фИО: attr('', { index: 9 })
    }, { index: -1, hidden: true }),
    билетКасса: belongsTo('i-i-s-kyrsovaya-билет-касса', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    перевозчик: belongsTo('i-i-s-kyrsovaya-перевозчик', 'Наименование', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
