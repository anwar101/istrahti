/**
 * Created by anwmohamed on 5/23/2016.
 */
istrahtiApp.service('AdminService',function ($http) {

    var dminLoginURL ='';


    


    this.doAdminLogin = function (data) {

        var response = $http({
            method: "POST",
            url: dminLoginURL,
            headers: { 'X-Auth-Token': token },
            dataType: "json",
            data: data
        });
        console.log(JSON.stringify(response));
        return response;
    };


     this.GetLienParties = function () {
        var response = $http({
            method: "GET",
            url: BASE_URL + parties,
            headers: { 'X-Auth-Token': token },
            dataType: "json"
        });
        return response;
     };


});