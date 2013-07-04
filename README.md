Overlook from 10,000 meters high
--------------------------------

Marionette router maps urls to actions.  Unlike Rails router, which is a singleton and manages all routes of the application, a Marionette router manages only part of the application's routes.

A simple rule is to create a router for each controller, that's why in Marionette, a router and its correspoding controller's code can reside in a single file, which I called a router-controller pair.

You can create many router-controller pairs in an application, they together form the routes set.

In client side app, we only create routes for GET methods, like new/show/edit/index, we don't need routes for methods like create/destroy/update in Rails.

Marionette router does two things:

1. when user changes browser url (either by enter directly or click back/forward button), call corresponding action to update app's state.

2. when app's state updated, change browser's url to reflect the change if neccessary.

You should seperate these two responsibility clearly in your code - so don't use `Backbone.history.navigate` with `trigger` set to true!

Each action is put in a Marionette submodule. The action is unfortunately named 'Controller', e.g. `List.Controller` is in fact an action. It's single responsibility is to acts like an action in Rails: get model, give model to view, and render view in a region on page.

The view used by an action is placed in the same directory as the action, so all codes related to an action  is placed in a directory, like a Java package.

Each view is given a template (in any template language). Events can be bind to views, Marionette will take care of binding/events clear when you replace views (I guess it's regions do the job).

Events is used to communicate between Views/Controllers/Routers, never call methods in other components directly.

Persistence Override
--------------------

Things to check if you want to override default persistence (RESTful API) logic:

* model/collection's `parse`
* model/collection's `url` and `urlRoot`
* `Backbone.emulateHTTP`
* `Backbone.emulateJSON`
* model/collection's `sync` or `Backbone.sync`
