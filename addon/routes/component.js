import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('application').components.findBy('name', params.id);
  }
});
