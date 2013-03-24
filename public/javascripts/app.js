GTCA = Ember.Application.create();
GTCA.ApplicationController = Ember.Controller.extend({
});

GTCA.Router.map(function() {
  this.route("dosing");
});

GTCA.DosingController = Ember.Controller.extend({
  fu: 'd'
});

GTCA.PatientController = Ember.Controller.extend({
});

GTCA.ApplicationRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('patient', {
                  into: 'application',
                  outlet: 'patient_view',
                  controller: 'patient'
                });
  }
});
