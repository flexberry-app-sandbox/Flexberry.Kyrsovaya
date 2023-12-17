import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kyrsovaya.caption'),
          title: i18n.t('forms.application.sitemap.kyrsovaya.title'),
          children: [{
            link: 'i-i-s-kyrsovaya-билет-касса-l',
            caption: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-билет-касса-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-билет-касса-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kyrsovaya-билеты-l',
            caption: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-билеты-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-билеты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kyrsovaya-перевозчик-l',
            caption: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-перевозчик-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-перевозчик-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kyrsovaya-клиент-l',
            caption: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-клиент-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kyrsovaya-транзакция-l',
            caption: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrsovaya.i-i-s-kyrsovaya-транзакция-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})