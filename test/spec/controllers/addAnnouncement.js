'use strict';

describe('Controller: AddannouncementCtrl', function () {

  // load the controller's module
  beforeEach(module('helpmeApp'));

  var AddannouncementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddannouncementCtrl = $controller('AddannouncementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
