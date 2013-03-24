GTCA = Ember.Application.create();
GTCA.ApplicationController = Ember.Controller.extend({
});

GTCA.Router.map(function() {
  this.resource('patient', { path: '/patient/:patient_id' }, function() {
    this.route("dosing");
  });
});

GTCA.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('patient', { id: 1 });
  }
});

GTCA.PatientDosingRoute = Ember.Route.extend({
  model: function() {
    return [];
  }
});

GTCA.PatientRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('patient-sidebar', {
                  into: 'patient',
                  outlet: 'patient_view'
                });
  },
  model: function(params) {
    return {
      id: 1,
      first_name: 'George',
      last_name: 'Clooney',
      birth_date: '3/10/1960',
      gender: 'Male',
      mr_id: 123213,
      acct_id: 13123
    }
  }
});

GTCA.PatientDosingController = Ember.ArrayController.extend({
});

GTCA.PatientIndexController = Ember.ObjectController.extend({
});

GTCA.ApplicationRoute = Ember.Route.extend({
});
