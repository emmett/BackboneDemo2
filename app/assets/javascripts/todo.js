// I prefer naming the topmost namespace `App` for simplicity.
window.App = {
  Collections: {},
  Models: {},
  Views: {},

  initialize: function () {
    App.Collections.todos.fetch();

    var view = new App.Views.TodosIndex({
      collection: App.Collections.todos
    });
    $("body").append(view.$el);
  }
};

$(App.initialize);
