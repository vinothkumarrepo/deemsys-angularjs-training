
describe('controllers from practice module', function() {

beforeEach(module('practice'));

it('should have the value of name from separatedFunction', function() {
  var scopeMock = {};
  var cntl = new separatedFunction(scopeMock);

  expect(scopeMock.name).toEqual('Vinod');
});

describe('greet controller', function() {
var $scope;

beforeEach(inject(function($rootScope, $controller) {
$scope = $rootScope.$new();
$controller('greet', {$scope: $scope});
}));

it('should have greetings scope var i.e. Hello World', function() {
  expect($scope.greeting).toBe("Hello World");
});

}); //first child describe ends - greet controller

//------------------
describe('calc controller', function() {
var $scope;

beforeEach(inject(function($rootScope, $controller) {
$scope = $rootScope.$new();
$controller('calc', {$scope: $scope});
}));

it('should have functions add & sub where sum(2,2) is 4; dif(2,2) is 0', function() {
  expect($scope.sum(2,2)).toBe(4);
  expect($scope.dif(2,2)).toBe(0);
});

}); // second child describe ends - calc controller
//------------------

describe('calc2 controller', function() {
var $scope;


beforeEach(inject(function($rootScope, $controller) {
$scope = $rootScope.$new();
$controller('calc2', {$scope: $scope});
}));

it('should have add function, add(1,1)=2 & div(0,0)=\u221e', function() {
  expect($scope.add(2,2)).toBe(4);
  expect($scope.div(0,0)).toBe('\u221e');
});

}); // third child describe ends - calc2 controller
//------------------

describe('service1 controller', function() {

var mck, sinf;

beforeEach(function() {

mck = {alert: jasmine.createSpy() };

module(function($provide) {
$provide.value('$window', mck);
});

inject(function($injector) {
sinf = $injector.get('showinfo');
});
});

it('should alert all after two messages', function() {
sinf('one');
sinf('two');

expect(mck.alert).toHaveBeenCalledWith("one\ntwo");
});

}); // fourth child describe ends - service1 controller
//------------------


});