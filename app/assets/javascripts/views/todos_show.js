App.Views.TodosShow = Backbone.View.extend({
  template: JST["todos/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.comments(), "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      todo: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
