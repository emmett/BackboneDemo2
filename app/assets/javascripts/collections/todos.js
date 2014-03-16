App.Collections.Todos = Backbone.Collection.extend({
  model: App.Models.Todo,
  url: "/api/todos"
});

App.Collections.todos = new App.Collections.Todos();
