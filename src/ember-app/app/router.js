import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kyrsovaya-билет-l');
  this.route('i-i-s-kyrsovaya-билет-e',
  { path: 'i-i-s-kyrsovaya-билет-e/:id' });
  this.route('i-i-s-kyrsovaya-билет-e.new',
  { path: 'i-i-s-kyrsovaya-билет-e/new' });
  this.route('i-i-s-kyrsovaya-билет-касса-l');
  this.route('i-i-s-kyrsovaya-билет-касса-e',
  { path: 'i-i-s-kyrsovaya-билет-касса-e/:id' });
  this.route('i-i-s-kyrsovaya-билет-касса-e.new',
  { path: 'i-i-s-kyrsovaya-билет-касса-e/new' });
  this.route('i-i-s-kyrsovaya-билеты-l');
  this.route('i-i-s-kyrsovaya-билеты-e',
  { path: 'i-i-s-kyrsovaya-билеты-e/:id' });
  this.route('i-i-s-kyrsovaya-билеты-e.new',
  { path: 'i-i-s-kyrsovaya-билеты-e/new' });
  this.route('i-i-s-kyrsovaya-клиент-l');
  this.route('i-i-s-kyrsovaya-клиент-e',
  { path: 'i-i-s-kyrsovaya-клиент-e/:id' });
  this.route('i-i-s-kyrsovaya-клиент-e.new',
  { path: 'i-i-s-kyrsovaya-клиент-e/new' });
  this.route('i-i-s-kyrsovaya-перевозчик-l');
  this.route('i-i-s-kyrsovaya-перевозчик-e',
  { path: 'i-i-s-kyrsovaya-перевозчик-e/:id' });
  this.route('i-i-s-kyrsovaya-перевозчик-e.new',
  { path: 'i-i-s-kyrsovaya-перевозчик-e/new' });
  this.route('i-i-s-kyrsovaya-транзакция-l');
  this.route('i-i-s-kyrsovaya-транзакция-e',
  { path: 'i-i-s-kyrsovaya-транзакция-e/:id' });
  this.route('i-i-s-kyrsovaya-транзакция-e.new',
  { path: 'i-i-s-kyrsovaya-транзакция-e/new' });
});

export default Router;
