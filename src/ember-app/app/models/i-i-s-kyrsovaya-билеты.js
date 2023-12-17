import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БилетыMixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-билеты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БилетыMixin, Validations, {
});

defineProjections(Model);

export default Model;
