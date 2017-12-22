import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import EditFormRouteOperationsIndicationMixin from 'ember-flexberry/mixins/edit-form-route-operations-indication';

export default EditFormNewRoute.extend(EditFormRouteOperationsIndicationMixin, {
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'parentE'
  */
  modelProjection: 'parentE',

  /**
    Name of model to be used as form's record type.

    @property modelName
    @type String
    @default 'ember-flexberry-dummy-parent'
  */
  modelName: 'ember-flexberry-dummy-parent',

  /**
    Name of template to be rendered.

    @property templateName
    @type String
    @default 'components-examples/flexberry-objectlistview/inheritance-models/parent-edit'
  */
  templateName: 'components-examples/flexberry-objectlistview/inheritance-models/parent-edit'
});
