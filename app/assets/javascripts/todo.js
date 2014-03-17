// I prefer naming the topmost namespace `App` for simplicity.
window.App = {
  Collections: {},
  Models: {},
  Routers: {},
  Views: {},

  initialize: function () {
    new App.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(App.initialize);
