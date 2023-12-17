import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Клиент_Mixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-клиент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Клиент_Mixin, Validations, {
});

defineProjections(Model);

export default Model;
