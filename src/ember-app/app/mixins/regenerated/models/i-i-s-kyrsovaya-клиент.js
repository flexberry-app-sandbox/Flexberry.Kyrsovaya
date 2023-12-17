import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банкСчет: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kyrsovaya-клиент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банкСчет: {
    descriptionKey: 'models.i-i-s-kyrsovaya-клиент.validations.банкСчет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kyrsovaya-клиент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Клиент_E', 'i-i-s-kyrsovaya-клиент', {
    iD: attr('ID', { index: 0 }),
    банкСчет: attr('Банк счет', { index: 1 }),
    фИО: attr('ФИО', { index: 2 })
  });

  modelClass.defineProjection('Клиент_L', 'i-i-s-kyrsovaya-клиент', {
    iD: attr('ID', { index: 0 }),
    банкСчет: attr('Банк счет', { index: 1 }),
    фИО: attr('ФИО', { index: 2 })
  });
};
