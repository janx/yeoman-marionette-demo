How To Run
----------

```
> bower install
> grunt server
```

Overlook from 10,000 meters high
--------------------------------

Marionette router maps urls to actions.  Unlike Rails router, which is a singleton and manages all routes of the application, a Marionette router manages only part of the application's routes.

In Marionette, a simple rule is to create a router for each controller, and a router and its correspoding controller's code can reside in a single file, which I called a router-controller pair.

You can create many router-controller pairs in an application, they together form the routes set.

In Marionette, we only create routes for GET methods, like new/show/edit/index, we don't need routes for methods like create/destroy/update in Rails.

Marionette router does two things:

1. when user changes browser url (either by enter directly or click back/forward button), call corresponding action to update app's state.

2. when app's state updated, change browser's url to reflect the change if neccessary.

You should seperate these two responsibility clearly in your code - so don't use `Backbone.history.navigate` with `trigger` set to true!

Each action is put in a Marionette submodule. The action is unfortunately named 'Controller', e.g. `List.Controller` is in fact an action. Action is a plain hash, extends nothing. It's single responsibility is to acts like an action in Rails: get model, give model to view, and render view in a region on page.

The view used by an action is placed in the same directory as the action, so all codes related to an action  is placed in a directory, like a Java package.

Each view is given a template (in any template language). Events can be bind to views, Marionette will take care of binding/events clear when you replace views (I guess it's regions do the job).

Views respond to dom events, but they should not be responsible for processing those events. Instead, views only collect necessary informations to procced and broadcast those data by triggering event. Usually it's controller listen to such event and do the rest.

Events is used to communicate between Views/Controllers/Routers, never call methods in other components directly.

Persistence Override
--------------------

Things to check if you want to override default persistence (RESTful API) logic:

* model/collection's `parse`
* model/collection's `url` and `urlRoot`
* `Backbone.emulateHTTP`
* `Backbone.emulateJSON`
* model/collection's `sync` or `Backbone.sync`

Tips
----

* Use `$.Deferred` to hide network latency on model.fetch.
* Use `myCollection.trigger('reset')` to force collection/composite view to re-render.
* When a view is displayed, Marionette will trigger a 'show' event and execute the view's onShow function.
* Use `serializeData` in view to provide template extra json data.
* Define model.validate() for validation, it should return hash of errors by model.validationError on save.
