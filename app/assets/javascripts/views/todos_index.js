App.Views.TodosIndex = Backbone.View.extend({
  render: function () {
    var $ul = $("<ul></ul>");

    App.Collections.todos.each(function (todo) {
      var $li = $("<li></li>");
      // TODO: don't use `get` to insert un-escaped user generated
      // content.
      $li.text(todo.get("title"));

      $ul.append($li);
    });

    this.$el.html($ul);

    return this;
  }
});
