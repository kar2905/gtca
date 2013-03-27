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

GTCA.DrugTextField = Ember.TextField.extend({
  insertNewline: function() {
    this.get('controller').send('add_drug');
  }
});

GTCA.PatientDosingController = Ember.ArrayController.extend({
  add_drug: function() { 
    switch(this.get('drug')) {
      case 'Warfarin':
        this.addObject({ 
          title: 'Warfarin',
          dosage: '2mg',
          typical_dosage: '1mg',
          factors: [
            { name: 'CYP2C9', type: 'SNP', effect: 0.5 },
            { name: 'Asian', type: 'Ethnicity', effect: -0.2 },
            { name: 'Heart Surgery', type: 'Condition', effect: 0.3 },
          ]
        });
        break;
      case 'Tylenol':
        this.addObject({
          title: 'Tylenol',
          dosage: '3mg',
          typical_dosage: '4mg',
          factors: [
            { name: 'Asian', type: 'Ethnicity', effect: -0.2 },
            { name: 'Heart Surgery', type: 'Condition', effect: 0.3 },
            { name: 'CYP2C9', type: 'SNP', effect: 0.5 },
          ]
        });
        break;
      case '':
        break;
      default:
        alert('Bad drug'); 
    }
    this.set('drug', "");
    this.set('selection', this.get('lastObject'));
  }
});

GTCA.PatientIndexController = Ember.ObjectController.extend({
});

GTCA.ApplicationRoute = Ember.Route.extend({
});
