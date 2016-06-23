import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import EditFormMixin from '../../mixins/edit-form-mixin';

export default EditFormNewRoute.extend(EditFormMixin, {
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'SuggestionE'
   */
  modelProjection: 'SuggestionE',

  /**
    Name of model to be used as form's record type.

    @property modelName
    @type String
    @default 'ember-flexberry-dummy-suggestion'
   */
  modelName: 'ember-flexberry-dummy-suggestion',

  /**
    Name of controller to be used.

    @property controllerName
    @type String
    @default 'ember-flexberry-dummy-suggestion-edit'
   */
  controllerName: 'ember-flexberry-dummy-suggestion-edit',

  /**
    Name of template to be rendered.

    @property templateName
    @type String
    @default 'ember-flexberry-dummy-suggestion-edit'
   */
  templateName: 'ember-flexberry-dummy-suggestion-edit'
});
