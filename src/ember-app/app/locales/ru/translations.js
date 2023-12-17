import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kyrsovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrsovaya',
          title: 'Kyrsovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
