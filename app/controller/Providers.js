Ext.define('relaxly.controller.Providers', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'providers/:id': 'showProvider'
        }
    },

    showProvider: function(id) {
        console.log('showing product ' + id);
    }
});