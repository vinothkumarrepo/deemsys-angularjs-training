
angular.module('expressions', [])

        .controller('express', function($scope) {
            var values = $scope.values = [];
            $scope.vals = "1*1";
            $scope.addVals = function(vl) {
                values.push(vl);
            };
            $scope.clickTest = function(func) {
                $scope.eve_detail = simpleKeys(func);
                console.log(func);
            };
            function simpleKeys (original) {
    return Object.keys(original).reduce(function (obj, key) {
      obj[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
      return obj;
    }, {});
  }
});