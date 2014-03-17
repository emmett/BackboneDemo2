App.Views.TodosShow = Backbone.View.extend({
  template: JST["todos/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.comments(), "sync add", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      todo: this.model
    });

    this.$el.html(renderedContent);

    // TODO: **Very** janky to instantiate this view on every render!
    var commentNewView =
      new App.Views.CommentsNew({ model: this.model });
    this.$(".comments-new").html(commentNewView.render().$el);

    return this;
  }
});
