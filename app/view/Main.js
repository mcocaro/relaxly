Ext.define("relaxly.view.Main", {
    extend: 'Ext.Container',
    fullscreen: true,
    config: {
        html: [
               "<div id='layout'>",
               	"<div id='content'>",
               	   "<img src='resources/images/relaxly_logo2.png' width='190px' height='100px'>",
               	   "<br/>",
	               "<p style='color:#FFFFFF'>Join our members and get highly recommended mobile spa services at home anytime, anywhere</p>",
	               "<div id='login' class='fb-login-button'>",
	               "<p><button onClick='login();'>Login with Facebook</button></p>",
	               "</div>",
	             "</div>",
               "</div>"
           ].join("")
    }
});
