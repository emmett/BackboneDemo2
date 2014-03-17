App.Views.TodosShow = Backbone.CompositeView.extend({
  template: JST["todos/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(
      this.model.comments(), "sync add remove", this.render
    );

//    this.model.comments().each(function (comment) {
//      var commentsShow =
//        new App.Views.CommentsShow({ model: comment });
//      view.addSubview(".comments", commentsShow.render());
//    });

    var commentNewView =
      new App.Views.CommentsNew({ model: this.model });
    this.addSubview(".comments-new", commentNewView.render());
  },

  render: function () {
    var view = this;
    var renderedContent = this.template({
      todo: this.model
    });

    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
});
