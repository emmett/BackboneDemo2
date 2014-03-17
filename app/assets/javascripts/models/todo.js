App.Models.Todo = Backbone.Model.extend({
  urlRoot: "/api/todos",

  comments: function () {
    this._comments = this._comments ||
      new App.Collections.TodoComments([], { todo: this });
    return this._comments;
  }
});
