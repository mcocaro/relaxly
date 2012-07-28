Ext.define("relaxly.view.Main", {
    extend: 'Ext.Panel',
    fullscreen: true,
    config: {
        html: [
               "Join our members and get highly recommended mobile spa services at home anytime, anywhere",
               "<div id='login' class='fb-login-button'>",
               "<p><button onClick='login();'>Login with Facebook</button></p>",
               "</div>"
           ].join("")
    }
});
