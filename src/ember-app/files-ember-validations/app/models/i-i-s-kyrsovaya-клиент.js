import {
  defineNamespace,
  defineProjections,
  Model as Клиент_Mixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-клиент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Клиент_Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
