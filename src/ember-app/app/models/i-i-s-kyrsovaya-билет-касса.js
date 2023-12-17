import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БилетКассаMixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-билет-касса';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БилетКассаMixin, Validations, {
});

defineProjections(Model);

export default Model;
