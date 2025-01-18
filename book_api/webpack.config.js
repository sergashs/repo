const path = require('path');

module.exports = {
  transpileDependencies: ['vuex-module-decorators'],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),

    },


  },



}