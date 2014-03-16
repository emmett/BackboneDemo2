// I prefer naming the topmost namespace `App` for simplicity.
window.App = {
  Collections: {},
  Models: {},
  Views: {},

  initialize: function () {
    var view = new App.Views.TodosIndex();

    App.Collections.todos.fetch({
      success: function () {
        $("body").append(view.render().$el);
      }
    });
  }
};

$(App.initialize);
