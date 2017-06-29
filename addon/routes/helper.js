import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('application').helpers.findBy('name', params.id);
  }
});
