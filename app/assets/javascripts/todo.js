// I prefer naming the topmost namespace `App` for simplicity.
window.App = {
  Collections: {},
  Models: {},
  Views: {},

  initialize: function () {
    App.Collections.todos.fetch();

    var indexView = new App.Views.TodosIndex({
      collection: App.Collections.todos
    });
    $("body").append(indexView.$el);

    var newView = new App.Views.TodosNew();
    $("body").append(newView.render().$el);
  }
};

$(App.initialize);
