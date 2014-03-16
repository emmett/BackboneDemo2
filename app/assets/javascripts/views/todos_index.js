App.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos/index"],

  render: function () {
    var renderedContent = this.template({ todos: this.collection });
    this.$el.html(renderedContent);

    return this;
  }
});
