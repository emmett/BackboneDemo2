App.Views.TodosNew = Backbone.View.extend({
  template: JST["todos/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var newTodo = new App.Models.Todo({
      title: this.$('input[name="todo\\[title\\]"]').val()
    });

    newTodo.save({}, {
      success: function () { App.Collections.todos.add(newTodo) }
    });
  }
});
