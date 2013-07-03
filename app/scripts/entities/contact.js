(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function( App ) {

    App.module('Models', function(Models, App, Backbone, Marionette, $, _) {
      Models.Contact = Backbone.Model.extend({
        defaults: {
          firstName: 'Foo',
          lastName: 'Bar',
          phoneNumber: "No phone number!"
        }
      });

      Models.ContactCollection = Backbone.Collection.extend({
        model: Models.Contact,
        comparator: function(contact) { return contact.get('firstName') + contact.get('lastName'); }
      });

    })

    var contacts;

    var initializeContacts = function() {
      contacts = new App.Models.ContactCollection([
        {id: 1, firstName: "Alice", lastName: "Tampen", phoneNumber: "555-0184"},
        {id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163"},
        {id: 3, firstName: "Alice", lastName: "Artsy", phoneNumber: "555-0184"},
        {id: 4, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184"},
        {id: 5, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129"},
        {id: 6, firstName: "Alice", lastName: "Smith", phoneNumber: "555-0184"}
      ]);
    }

    var API = {
      getContactItems: function() {
        if(contacts === undefined) {
          initializeContacts();
        }

        return contacts;
      }
    }

    App.reqres.setHandler("contact:items", function() {
      return API.getContactItems();
    })

  });
}).call( this );
