Ext.define('Rolinator.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
	'Ext.carousel.Carousel',
	'Ext.field.Slider',
	'Ext.field.Toggle'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home Tab',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: false,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome :)'
                },

                html: [
		    '<h1>Starting page</h1>',
 		    '<img src="http://staging.sencha.com/img/sencha.png" />',
                    "<p>That's the starting page.</p>"		    
                ].join("")
            },
            {
		xtype: 'container',
            	title: 'List',
            	iconCls: 'list',
		layout: 'fit',

            	items: [
		{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'A simple list'
                },
            	{
	                xtype: 'list',
	                data: [
	                {
	                    title: 'Item 1'
	                },
	                {
	                    title: 'Item 2'
	                },
	                {
	                    title: 'Item 3'
	                },
	                {
	                    title: 'Item 4'
	                }
	        	],
                itemTpl: '{title}',
		}
                ]
            },
	    {
		xtype: 'container',
            	title: 'Carousel',
            	iconCls: 'refresh',
		layout: 'fit',

            	items: [
		{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'A carousel'
                },
            	{
	            xtype: 'carousel',

		    items: [
		        {
		            html : '<p>Item 1</p>',
		        },
		        {
		            html : '<p>Item 2</p>',
		            style: 'background-color: #759E60'
		        },
		        {
		            html : '<p>Item 3</p>'
		        },
		        {
		            html : '<p>Item 4</p>',
		            style: 'background-color: #759E60'
		        }
		    ]
		}
		]
	    },
	    {
		xtype: 'container',
            	title: 'Sliders',
            	iconCls: 'arrow_right',
		layout: 'fit',

            	items: [
		{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Slide and toggle'
                },
            	{
	            xtype: 'formpanel',

		    items: [
		        {
		            xtype: 'fieldset',
			    id: 'myfieldset',
			    defaults: {labelWidth: '35%', labelAlign: 'top'},
			    listeners:
			    {
			    	render: function()
				{
					var myfieldset = document.getElementById('myfieldset');
				        myfieldset.style.padding = "10px";                          
				}
			    }
		        },
		        {
		            items: [
			    {
				xtype: 'sliderfield',
				name: 'thumb',
				label: 'Single Thumb'
			    },
			    {
				xtype: 'sliderfield',
				name: 'multithumb',
				label: 'Multiple Thumbs',
				values: [20, 80]
			    },
			    {
				xtype: 'togglefield',
				name: 'toggle',
				label: 'Toggle'
			    },
			    ]
		        }
		    ]
		}
		]
	    }
        ]
    }
});
