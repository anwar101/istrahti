/**
 * Created by anwmohamed on 5/22/2016.
 */

 istrahtiApp=angular.module('istrahtiApp',['ngRoute','ngCookies'], function ($rootScopeProvider) {})
     .run(function ($rootScope, $cookieStore, $location,  $timeout) {

        debugger;
         token = $cookieStore.get('token');
         $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {});
         debugger
         var url = $location.absUrl();

         if (token != undefined && url.indexOf("MasterAdmin.html") > -1) {

             $(".main-header").show();
             $(".main-sidebar").show();
             $(".main-footer").show();
             $(".content-wrapper").show();
             $(".control-sidebar").show();
             $location.path('/AdminLogin');
         }

         else if (token == undefined && url.indexOf("MasterAdmin.html") > -1) { $location.path('/AdminLogin'); }


     });



istrahtiApp.config(['$routeProvider',function($routeProvider) {
    debugger
    $routeProvider
        .when("/", {
            templateUrl: "AdminLogin.html",
           controller: "AdminLoginController"
        })
           .when("/AdminLogin", {
            templateUrl: "AdminLogin.html",
            controller: "AdminLoginController"
        }).when("/blank", {
        templateUrl: "almsaeedstudio.com/themes/AdminLTE/pages/examples/blank.html",
        // controller: "AdminLoginController"
    })
        .when("/AdminServices", {
        templateUrl: "AdminstrationServices.html",
       controller: "AdminLoginController"
    })
        .when("/Temp1", {
        templateUrl: "Temp1.html",
        // controller: "AdminLoginController"
    })
        .when("/Temp2", {
        templateUrl: "Temp1.html",
        // controller: "AdminLoginController"
    })
        .otherwise({ redirectTo: '/' });
}]);

