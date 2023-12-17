import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Транзакция_Mixin
} from '../mixins/regenerated/models/i-i-s-kyrsovaya-транзакция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Транзакция_Mixin, Validations, {
});

defineProjections(Model);

export default Model;
