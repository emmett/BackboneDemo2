App.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos/index"],
  events: {
    "click button.refresh": "refresh"
  },

  refresh: function () {
    this.collection.fetch({
      success: this.render.bind(this)
    });
  },

  render: function () {
    var renderedContent = this.template({ todos: this.collection });
    this.$el.html(renderedContent);

    return this;
  }
});
