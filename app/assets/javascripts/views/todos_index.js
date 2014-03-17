App.Views.TodosIndexRow = Backbone.View.extend({
  template: JST["todos/index_row"],
  tagName: "tr",

  render: function () {
    var renderedContent = this.template({ todo: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});

App.Views.TodosIndex = Backbone.TableView.extend({
  template: JST["todos/index"],

  events: _.extend({
    "click button.refresh": "refresh"
  }, Backbone.TableView.prototype.events),

  rowSubviewClass: App.Views.TodosIndexRow,

  refresh: function () {
    this.collection.fetch();
  },

  render: function () {
    var renderedContent = this.template({ todos: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
});
