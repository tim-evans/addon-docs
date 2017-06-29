import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('component', { path: '/component/:id' });
  this.route('service', { path: '/service/:id' });
  this.route('system', { path: '/object/:id' });
  this.route('helper', { path: '/helper/:id' });
});
