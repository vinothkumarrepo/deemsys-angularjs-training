var appng = angular.module("practice", []);

appng.controller("greet", function($scope) {
$scope.greeting = "Hello World";
})

.controller("calc", ["$scope", function($scope) {
$scope.sum = function(x, y) { return x+y; };
$scope.dif = function(x, y) { return x-y; };
}])

.controller("calc2", ["$scope", function($scope) {
$scope.num1=1;
$scope.num2=1;
$scope.add = function(num1, num2) { return num1+num2; };
$scope.div = function(x, y) { if(y != 0) {
        return x/y;
    }
    else
        return '\u221E';
};
}]);

//--------------

var separatedFunction = function($scope) {
$scope.name = "Vinod";
};

separatedFunction.$inject = ['$scope'];

appng.controller('separatedFunction', separatedFunction);
//---------------

appng.controller("service1", ["$scope", "showinfo", function($scope, showinfo) {
$scope.controllerFunc = function(inf) {
showinfo(inf);
};
}]);

appng.factory('showinfo', ['$window', function(win) {
var str = [];

return function(inf) {
str.push(inf);
if(str.length === 2) {
win.alert(str.join("\n"));
str=[];
}
};
}]);


