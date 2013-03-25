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
    this.transitionTo('patient', { id: 'huAC827A' });
  }
});

GTCA.PatientDosingRoute = Ember.Route.extend({
  model: function() {
    return [ 
    { 
      title: 'Warfarin',
      dosage: '2mg',
      typical_dosage: '1mg',
      factors: [
        { name: 'CYP2C9', type: 'SNP', effect: 0.5 },
        { name: 'Asian', type: 'Ethnicity', effect: -0.2 },
        { name: 'Heart Surgery', type: 'Condition', effect: 0.3 },
      ]
    },
    {
      title: 'Tylenol',
      dosage: '3mg',
      typical_dosage: '4mg',
      factors: [
        { name: 'Asian', type: 'Ethnicity', effect: -0.2 },
        { name: 'Heart Surgery', type: 'Condition', effect: 0.3 },
        { name: 'CYP2C9', type: 'SNP', effect: 0.5 },
      ]
    }
    ];
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
      id: 'huAC827A',
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
