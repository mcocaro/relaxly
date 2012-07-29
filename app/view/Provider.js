Ext.define("relaxly.view.Provider", {
	extend: 'Ext.tab.Panel',
	id: 'providerPanel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
    	activeTab: 0,
    	tabBar: {
    		layout: {
    			pack: 'center',
    			align: 'center'
    		},
    		docked: 'bottom'
    	},
    	defaults: {
    		scrollable: true
    	},

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Relax.ly',
                items: [
						{
						    text: 'Back',
						    iconMask: true,
						    align: 'left',
						    handler: function() {
						    	Ext.Viewport.getAt(0).show();
						    }
						},
                        {
                            text: 'Logout',
                            iconMask: true,
                            align: 'right',
                            handler: function() {
                            	FB.logout();
                            	window.location.reload(true);
                            }
                        }
                    ]
            },
            {
                title: 'Encontra',
                iconCls: 'search'
            },
            {
                title: 'Settings',
                iconCls: 'settings',
            }
        ]
    }	
});
