'use strict';

describe('Directive: signature', function() {

  var element;
  var scope;

  // load the directive's module
  beforeEach(function() {
      module('ng-twapp.signature');
      inject(function($rootScope) {
        scope = $rootScope.$new();
      });
  });

  
  it('should have expected text', inject(function($compile) {
      element = angular.element('<signature></signature>');
      element = $compile(element)(scope);
      expect(element.text()).to.equal('This is the signature directive.');
  }));
  
});