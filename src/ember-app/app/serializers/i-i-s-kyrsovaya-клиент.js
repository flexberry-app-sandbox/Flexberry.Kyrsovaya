import { Serializer as Клиент_Serializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrsovaya-клиент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Клиент_Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
