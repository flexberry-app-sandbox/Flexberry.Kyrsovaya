import { Serializer as БилетКассаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrsovaya-билет-касса';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БилетКассаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
