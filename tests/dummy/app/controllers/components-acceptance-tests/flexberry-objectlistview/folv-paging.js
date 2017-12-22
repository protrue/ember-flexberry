import ListFormController from 'ember-flexberry/controllers/list-form';

export default ListFormController.extend({

  /**
    Model projection for 'flexberry-objectlistview' component 'modelProjection' property.

    @property projection
    @type Object
   */
  projection: 'SuggestionTypeL',

  /**
    Name of related edit form route (for 'flexberry-objectlistview' component 'editFormRoute' property).

    @property editFormRoute
    @type String
   */
  editFormRoute: 'ember-flexberry-dummy-suggestion-type-edit',

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'readonly' mode or not.

    @property readonly
    @type Boolean
   */
  readonly: false,

  /**
    Flag for 'flexberry-objectlistview' component 'tableStriped' property.

    @property tableStriped
    @type Boolean
   */
  tableStriped: true,

  /**
    Flag for 'flexberry-objectlistview' component 'allowColumnResize' property.

    @property allowColumnResize
    @type Boolean
   */
  allowColumnResize: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'createNewButton' mode or not.

    @property createNewButton
    @type Boolean
   */
  createNewButton: true,

  /**
    Flag for 'flexberry-objectlistview' component 'deleteButton' property.

    @property deleteButton
    @type Boolean
   */
  deleteButton: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'enableFilters' mode or not.

    @property enableFilters
    @type Boolean
   */
  enableFilters: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'filterButton' mode or not.

    @property filterButton
    @type Boolean
   */
  filterButton: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'refreshButton' mode or not.

    @property refreshButton
    @type Boolean
   */
  refreshButton: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'showCheckBoxInRow' mode or not.

    @property showCheckBoxInRow
    @type Boolean
   */
  showCheckBoxInRow: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'showDeleteButtonInRow' mode or not.

    @property showDeleteButtonInRow
    @type Boolean
   */
  showDeleteButtonInRow: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'showEditButtonInRow' mode or not.

    @property showEditButtonInRow
    @type Boolean
   */
  showEditButtonInRow: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'showEditMenuItemInRow' mode or not.

    @property showEditMenuItemInRow
    @type Boolean
   */
  showEditMenuItemInRow: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'showDeleteMenuItemInRow' mode or not.

    @property showDeleteMenuItemInRow
    @type Boolean
   */
  showDeleteMenuItemInRow: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'rowClickable' mode or not.

    @property rowClickable
    @type Boolean
   */
  rowClickable: true,

  /**
    Flag: indicates whether 'flexberry-objectlistview' component is in 'orderable' mode or not.

    @property orderable
    @type Boolean
   */
  orderable: true,

  /**
    ext for 'flexberry-objectlistview' component 'singleColumnHeaderTitle' property.

    @property singleColumnHeaderTitle
    @type String
   */
  singleColumnHeaderTitle: undefined,

  /**
    Current records.

    @property _records
    @type Object[]
    @protected
    @readOnly
  */
  records: []
});
