import { Serializer as БилетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrsovaya-билет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БилетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
