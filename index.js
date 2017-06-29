/* eslint-env node */
const EngineAddon = require('ember-engines/lib/engine-addon');
const YUIDoc = require('broccoli-yuidoc');
const mergeTrees = require('broccoli-merge-trees');

module.exports = EngineAddon.extend({
  name: 'addon-docs',
  lazyLoading: false,

  treeForPublic: function () {
    let docs = new YUIDoc(['addon'], {
      destDir: 'docs',
      yuidoc: {
        parseOnly: true
      }
    });

    return mergeTrees([docs]);
  }
});
