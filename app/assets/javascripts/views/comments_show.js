App.Views.CommentsShow = Backbone.View.extend({
  template: JST["comments/show"],

  events: {
    "click button.destroy": "destroyComment"
  },

  destroyComment: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  render: function () {
    var renderedContent = this.template({ comment: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});
