Ext.define("relaxly.view.List", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.List'
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
                title: 'Relax.ly'
            },
            {
                title: 'Home',
                iconCls: 'home',
                xtype: 'list',
                itemTpl: '{name}',
                store: {
                	fields: ['name'],
                	data: [
                	       {name: 'Cowper'},
                	       {name: 'Everett'},
                	       {name: 'University'},
                	       {name: 'Forest'}
                	]
                }
            },
            {
                title: 'Settings',
                iconCls: 'action',
                
                html: [
                       "<div id='logout' class='fb-logout-button'>",
                       "<p><button onClick='logout();'>Logout</button></p>",
                       "</div>"
                   ].join("")
            }
        ]
    }
});
