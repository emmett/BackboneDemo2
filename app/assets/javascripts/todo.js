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

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, view) {
    this.subviews(selector).push(view);
  },

  attachSubviews: function () {
    // I decided I didn't want a function that renders ALL the
    // subviews together. Instead, I think:
    //
    // * The user of CompositeView should explicitly render the
    //   subview themself when they build the subview object.
    // * The subview should listenTo relevant events and re-render
    //   itself.
    //
    // All that is necessary is "attaching" the subview `$el`s to the
    // relevant points in the parent CompositeView.

    var view = this;
    _(this.subviews()).forEach(function (subviews, selector) {
      var $el = view.$(selector);
      // Clear it out.
      $el.empty();

      subviews.forEach(function (subview) {
        $el.append(subview.$el);
        // Previous call to `$el.empty()` may have removed
        // `subview.$el`. Must re-bind listeners a-fresh in that case.
        subview.delegateEvents();
      });
    });
  },

  subviews: function (selector) {
    // Map of selectors to subviews that live inside that selector.
    // Optionally pass a selector and I'll initialize/return an array
    // of subviews for the sel.
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});

$(App.initialize);
