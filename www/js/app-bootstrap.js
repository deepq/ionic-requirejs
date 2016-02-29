require.config({
    map: {
    },
    paths: {
    },
    shim: {
    }
});

define([
    'config',
    'services/Chats',
    'controllers/AccountCtrl',
    'controllers/ChatDetailCtrl',
    'controllers/ChatsCtrl',
    'controllers/DashCtrl'    
], function (config, Chats, AccountCtrl, ChatDetailCtrl, ChatsCtrl, DashCtrl) {
    var app = angular.module('MyApp', ['ionic'])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })
 
    app.config(config);
    app.factory('Chats', Chats);
    app.controller('AccountCtrl', AccountCtrl);
    app.controller('ChatDetailCtrl', ChatDetailCtrl);
    app.controller('ChatsCtrl', ChatsCtrl);
    app.controller('DashCtrl', DashCtrl);
    
    
    angular.bootstrap(document, ['MyApp']);       
});