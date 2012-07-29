Ext.application({
    name: 'relaxly',

    requires: [
        'Ext.MessageBox',
        'Ext.data.Store',
        'Ext.util.GeoLocation'
    ],
    
    views: ['Main','List','Provider'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        Parse.initialize("SRb1TxVp4zIAEL5V1NO25tScFVF7XHeLCGTOVBQa", "JvnOg9HzNWZhXUCWviu9MZHxw7ztHXZOj2Jxr79h");
        var Relaxer = Parse.Object.extend("Relaxer");
        
        window.fbAsyncInit = function() {
        	Parse.FacebookUtils.init({
              appId      : '391382627582773', // App ID
              channelUrl : '/relaxly/channel.html', // Channel File
              status     : true, // check login status
              cookie     : true, // enable cookies to allow the server to access the session
              xfbml      : true  // parse XFBML
            });
        	
            FB.getLoginStatus(handleStatusChange);
        };

        handleStatusChange = function (response) {
        	console.log("status changed "+response.status);
    	  if (response.status === 'connected') {
    	    // the user is logged in and has authenticated your
    	    // app, and response.authResponse supplies
    	    // the user's ID, a valid access token, a signed
    	    // request, and the time the access token 
    	    // and signed request each expire
    	    //var uid = response.authResponse.userID;
    	    //var accessToken = response.authResponse.accessToken;
    		  
		    FB.api('/me/likes', function(response) {
	    		console.log(response);
	    		var geo = Ext.create('Ext.util.Geolocation', {
			        autoUpdate: false,
			        listeners: {
			            locationupdate: function(geo) {
			                console.log('New latitude: ' + geo.getLatitude());
			            },
			            locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
			                if(bTimeout){
			                	console.log('Timeout occurred.');
			                } else {
			                	console.log('Error occurred.');
			                }
			            }
			        }
			    });
			    geo.updateLocation();
			    
			    Ext.Viewport.removeAll(true, true);
	    		Ext.Viewport.add(Ext.create('relaxly.view.List'));
	    	});  
    		
    	  } else if (response.status === 'not_authorized') {
    	    // the user is logged in to Facebook, 
    	    // but has not authenticated your app
    		FB.Event.subscribe('auth.statusChange', handleStatusChange);
    		  
    		Ext.Viewport.removeAll(true, true);
    		Ext.Viewport.add(Ext.create('relaxly.view.Main'));
    	  } else {
    	    // the user isn't logged in to Facebook.
    		FB.Event.subscribe('auth.statusChange', handleStatusChange);
    		  
    		Ext.Viewport.removeAll(true, true);
    		Ext.Viewport.add(Ext.create('relaxly.view.Main'));
    	  }
        };         
        
        login = function() {
          	Parse.FacebookUtils.logIn("email,user_events, user_hometown, user_relationships, user_relationship_details, friends_events, user_likes", {
    		  success: function(user) {
    		    if (!user.existed()) {
    		    	FB.api('/me', function(response) {
    		    		var point = new Parse.GeoPoint({latitude: 40.0, longitude: -30.0});
            	        user.save({name: response.name, loc: point}, {
            		        success: function(object) {
            		          $(".success").show();
            		        },
            		        error: function(model, error) {
            		          $(".error").show();
            		        }
            	        });
    		    	});
    		    } else {
    		    	
    		    }
    		    document.location.reload(true);
    		  },
    		  error: function(user, error) {
    		    //alert("User cancelled the Facebook login or did not fully authorize.");
    		  }
        	});         	
        };
        
        logout = function() {
        	console.log(FB.logout());
        };
        
      // Load the SDK Asynchronously
      (function(d){
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "//connect.facebook.net/en_US/all.js";
         ref.parentNode.insertBefore(js, ref);
       }(document));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
