
angular.module('myApp', ['practice', 'expressions'])
        .factory('batchLog', ['$interval', '$log', function($interval, $log) {
  var messageQueue = [];

  function log() {
    if (messageQueue.length) {
      $log.log('batchLog messages: ', messageQueue);
      messageQueue = [];
    }
  }

  // start periodic checking
  $interval(log, 10000);

  return function(message) {
    messageQueue.push(message);
  };
}])
    .controller('logTest', ['$scope', 'batchLog', function($scope, batchLog){
            $scope.notice = function(msg) {
                batchLog(msg);
            };
    }])

        .controller('interpolEg', function($scope) {
            $scope.fname = "circle";
    });
