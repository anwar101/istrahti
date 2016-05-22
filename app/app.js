/**
 * Created by anwmohamed on 5/22/2016.
 */

 istrahtiApp=angular.module('istrahtiApp',['ngRoute']);
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
       // controller: "AdminLoginController"
    })
        .otherwise({ redirectTo: '/' });
}]);