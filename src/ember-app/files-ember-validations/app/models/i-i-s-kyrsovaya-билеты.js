import {
  defineNamespace,
  defineProjections,
  Model as БилетыMixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-билеты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БилетыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
