import { Serializer as БилетыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrsovaya-билеты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БилетыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
