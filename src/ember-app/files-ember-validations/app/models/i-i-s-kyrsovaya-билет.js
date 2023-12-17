import {
  defineNamespace,
  defineProjections,
  Model as БилетMixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-билет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БилетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
