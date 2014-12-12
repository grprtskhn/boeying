myApp=angular.module('testMe', ['ngRoute']);
myApp.controller("ctrl1", function checkboxController($scope) {

	 $scope.items = [
	                 {value: "Publication"},
	                 {value: "Inventor"},
	                 {value: "Language"},
				     {value: "Source"},
				     {value: "Abstract"}
				    ];

	 $scope.formError = false;
	    $scope.sumit = function() {
	    	alert("HII");
	    		 
	    		 if($scope.items[2].value === 'Language' )
	    		 {
	    		 $scope.formError = true;
	    		 alert("HII");
	    		 return true;
	    		 }
	    		
	    		 };
	   
    $scope.checkAll = function () {
        if ($scope.selectedAll) 
		    {
		        $scope.selectedAll = false;
		    } 
        else 
	        {
	            $scope.selectedAll = true;
	        }
        angular.forEach($scope.items, function (item) {
            item.Selected = $scope.selectedAll;
        });
    };
    	

});


///////////////////Routing/////////
myApp.config(['$routeProvider',function($routeProvider) {
 $routeProvider
 .when('/', {
 templateUrl: 'index.html',
 controller: 'ctrl1'
 })
 .when('/results', {
 templateUrl: 'results.html',
 controller: 'ResultsController'
 })
 .otherwise({
 redirectTo: '/'
 });
 
}]);