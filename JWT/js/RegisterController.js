angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Angular Todo!";
    })
    .controller('registerController', function($scope, UserAPIService, store) {

    $scope.registrationUser = {};
        var URL ="http://morning-castle-91468.herokuapp.com/";

        var authStorage = {
            name: "StorageTest"
        };

        store.set('obj', authStorage);

        $scope.login=function(){
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data) then(function(results){
                $scope.token = results.data.token;
                console.log($scope.token);
            }).catch(function(err) {
                console.log(err.data);
            });
        }
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

        UserAPIService.callAPI(URL+ "accounts/register/", $scope.registrationUser).then(function)(results
            $scope.data= reults.data;
            alert ("You have succesfully registered to Angular Todo");
        }).catch(function(err){
            alert("Oops! Something went wrong!");
            console.log(err);
             });
        }
    }
});