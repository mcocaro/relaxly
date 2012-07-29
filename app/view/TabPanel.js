Ext.define("relaxly.view.TabPanel", {
    extend: 'Ext.tab.Panel',
    xtype:'lista',
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
                title: 'Relax.ly',
                items: [
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
                iconCls: 'search',
                xtype: 'list',
                itemTpl: [
	                 "<div class='item'>",
	                 "<span><p><strong>{name}</strong></p></span>",
	                 "<span><p>{address}</p></span>",
	                 "<span><p>{recommendations}</p></span>",
	                 "</div>"
                 ].join(""),
                store: {
                	fields: ['name','address','recommendations'],
                	data: [
                	       {name: 'Depilacion por vos', address: 'Avda Corrientes 1444, Capital Federal', recommendations: '4 likes'},
                	       {name: 'Wax in the city', address: 'Soler 2460, Capital Federal', recommendations: '3 likes'},
                	       {name: 'No more hair', address: 'Avda Cordoba 2360, Capital Federal', recommendations: '1 likes'}
                	]
                },
        		onItemDisclosure: {
        			scope:this,
        			handler:function(record, btn, index){
        				console.log(record);
        				var provPanel = Ext.getCmp("providerPanel") || new relaxly.view.Provider();
        				provPanel.setRecord(record.data);
        				if( !provPanel.getParent() ) {
        					Ext.Viewport.add(provPanel);
        				}
        				provPanel.show();
        			}
        		}
            },
            {
                title: 'Favorites',
                iconCls: 'favorites',
                
                html: [
                       "Esta va a ser tu seccion con tus favoritos",
                   ].join(""),
                style: 'text-align: center;'
            },
            {
                title: 'Settings',
                iconCls: 'settings',
                
                html: [
                       "Esta va a ser tu seccion con tus preferencias",
                   ].join(""),
                style: 'text-align: center;'
            }
        ]
    }
});