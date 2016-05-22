/**
 * Created by anwmohamed on 5/22/2016.
 */

istrahtiApp.controller('AdminLoginController',['$scope', '$location',
    function ($scope, $location ) {
        debugger
        var url = $location.absUrl();

        $scope.UserName = '';
        $scope.Password = '';

     //   $cookieStore.put('token', token);
      //  $cookieStore.put('loggedInUser', $scope.UserName);

        $location.path('/');


        $scope.AdminLogin = function () {
            debugger
            var url = $location.absUrl();


            //   $cookieStore.put('token', token);
            //  $cookieStore.put('loggedInUser', $scope.UserName);

            if($scope.UserName ==='a' && $scope.Password=='123'){
            $(".main-header").show();
            $(".main-sidebar").show();
                $(".main-footer").show();
                $(".content-wrapper").show();
                $(".control-sidebar").show();
                $location.path('/blank');
            }

            else{
                 alert('Pleaze Tye Again !');
            }
           // $("#dvBreadcrumb").show();
           // $("#footer").show();
           // $location.path('/ForbiddenDerestrictServices');
        };
        
        
}]);
