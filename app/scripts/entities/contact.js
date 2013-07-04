(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function( App ) {
    App.module('Models', function(Models, App, Backbone, Marionette, $, _) {

      Models.Contact = Backbone.Model.extend({
        urlRoot: "contacts",

        defaults: {
          firstName: 'Foo',
          lastName: 'Bar',
          phoneNumber: "No phone number!"
        }
      });

      Models.configureStorage(Models.Contact);

      Models.ContactCollection = Backbone.Collection.extend({
        url: "contacts",
        model: Models.Contact,
        comparator: function(contact) { return contact.get('firstName') + contact.get('lastName'); }
      });

      Models.configureStorage(Models.ContactCollection);
    })

    var initializeContacts = function() {
      var contacts = new App.Models.ContactCollection([
        {id: 1, firstName: "Alice", lastName: "Tampen", phoneNumber: "555-0184"},
        {id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163"},
        {id: 3, firstName: "Alice", lastName: "Artsy", phoneNumber: "555-0184"},
        {id: 4, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184"},
        {id: 5, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129"},
        {id: 6, firstName: "Alice", lastName: "Smith", phoneNumber: "555-0184"}
      ]);

      contacts.forEach(function(contact) {
        contact.save();
      });

      console.log("Contacts web storage initialized.");
      return contacts;
    }

    var API = {
      getContactEntities: function() {
        var contacts = new App.Models.ContactCollection();
        contacts.fetch();

        if(contacts.length === 0) {
          return initializeContacts();
        }

        return contacts;
      },

      getContactEntity: function(contactId) {
        var contact = new App.Models.Contact({id: contactId});
        contact.fetch();
        return contact;
      }
    }

    App.reqres.setHandler("contact:entities", function() {
      return API.getContactEntities();
    });

    App.reqres.setHandler("contact:entity", function(id) {
      return API.getContactEntity(id);
    });

  });
}).call( this );
