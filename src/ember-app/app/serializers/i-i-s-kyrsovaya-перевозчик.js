import { Serializer as ПеревозчикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrsovaya-перевозчик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПеревозчикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
