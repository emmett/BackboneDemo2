App.Views.TodosShow = Backbone.View.extend({
  template: JST["todos/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(
      this.model.comments(), "sync add remove", this.render
    );
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

    // TODO: Even jankier!
    this.model.comments().each(function (comment) {
      var commentsShow =
        new App.Views.CommentsShow({ model: comment });

      this.$(".comments").append(commentsShow.render().$el);
    });

    return this;
  }
});
