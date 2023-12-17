import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKyrsovayaБилетLForm from './forms/i-i-s-kyrsovaya-билет-l';
import IISKyrsovayaБилетКассаLForm from './forms/i-i-s-kyrsovaya-билет-касса-l';
import IISKyrsovayaБилетыLForm from './forms/i-i-s-kyrsovaya-билеты-l';
import IISKyrsovayaКлиент_LForm from './forms/i-i-s-kyrsovaya-клиент-l';
import IISKyrsovayaПеревозчикLForm from './forms/i-i-s-kyrsovaya-перевозчик-l';
import IISKyrsovayaТранзакция_LForm from './forms/i-i-s-kyrsovaya-транзакция-l';
import IISKyrsovayaБилетEForm from './forms/i-i-s-kyrsovaya-билет-e';
import IISKyrsovayaБилетКассаEForm from './forms/i-i-s-kyrsovaya-билет-касса-e';
import IISKyrsovayaБилетыEForm from './forms/i-i-s-kyrsovaya-билеты-e';
import IISKyrsovayaКлиент_EForm from './forms/i-i-s-kyrsovaya-клиент-e';
import IISKyrsovayaПеревозчикEForm from './forms/i-i-s-kyrsovaya-перевозчик-e';
import IISKyrsovayaТранзакция_EForm from './forms/i-i-s-kyrsovaya-транзакция-e';
import IISKyrsovayaБилетКассаModel from './models/i-i-s-kyrsovaya-билет-касса';
import IISKyrsovayaБилетModel from './models/i-i-s-kyrsovaya-билет';
import IISKyrsovayaБилетыModel from './models/i-i-s-kyrsovaya-билеты';
import IISKyrsovayaКлиент_Model from './models/i-i-s-kyrsovaya-клиент';
import IISKyrsovayaПеревозчикModel from './models/i-i-s-kyrsovaya-перевозчик';
import IISKyrsovayaТранзакция_Model from './models/i-i-s-kyrsovaya-транзакция';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrsovaya-билет-касса': IISKyrsovayaБилетКассаModel,
    'i-i-s-kyrsovaya-билет': IISKyrsovayaБилетModel,
    'i-i-s-kyrsovaya-билеты': IISKyrsovayaБилетыModel,
    'i-i-s-kyrsovaya-клиент': IISKyrsovayaКлиент_Model,
    'i-i-s-kyrsovaya-перевозчик': IISKyrsovayaПеревозчикModel,
    'i-i-s-kyrsovaya-транзакция': IISKyrsovayaТранзакция_Model
  },

  'application-name': 'Kyrsovaya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kyrsovaya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrsovaya',
          title: 'Kyrsovaya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kyrsovaya: {
          caption: 'Kyrsovaya',
          title: 'Kyrsovaya',
          'i-i-s-kyrsovaya-билет-касса-l': {
            caption: 'Билетная касса',
            title: ''
          },
          'i-i-s-kyrsovaya-билеты-l': {
            caption: 'Билеты',
            title: ''
          },
          'i-i-s-kyrsovaya-перевозчик-l': {
            caption: 'Перевозчик',
            title: ''
          },
          'i-i-s-kyrsovaya-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kyrsovaya-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kyrsovaya-билет-l': IISKyrsovayaБилетLForm,
    'i-i-s-kyrsovaya-билет-касса-l': IISKyrsovayaБилетКассаLForm,
    'i-i-s-kyrsovaya-билеты-l': IISKyrsovayaБилетыLForm,
    'i-i-s-kyrsovaya-клиент-l': IISKyrsovayaКлиент_LForm,
    'i-i-s-kyrsovaya-перевозчик-l': IISKyrsovayaПеревозчикLForm,
    'i-i-s-kyrsovaya-транзакция-l': IISKyrsovayaТранзакция_LForm,
    'i-i-s-kyrsovaya-билет-e': IISKyrsovayaБилетEForm,
    'i-i-s-kyrsovaya-билет-касса-e': IISKyrsovayaБилетКассаEForm,
    'i-i-s-kyrsovaya-билеты-e': IISKyrsovayaБилетыEForm,
    'i-i-s-kyrsovaya-клиент-e': IISKyrsovayaКлиент_EForm,
    'i-i-s-kyrsovaya-перевозчик-e': IISKyrsovayaПеревозчикEForm,
    'i-i-s-kyrsovaya-транзакция-e': IISKyrsovayaТранзакция_EForm
  },

});

export default translations;
