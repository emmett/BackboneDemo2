App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "todosIndex",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  todosIndex: function () {
    App.Collections.todos.fetch();

    var indexView = new App.Views.TodosIndex({
      collection: App.Collections.todos
    });
    $("body").html(indexView.$el);
  },

  todosNew: function () {
    var newView = new App.Views.TodosNew();
    $("body").html(newView.render().$el);
  },

  todosShow: function (id) {
    var todo = App.Collections.todos.getOrFetch(id);

    var showView = new App.Views.TodosShow({
      model: todo
    });

    $("body").html(showView.render().$el);
  }
});
