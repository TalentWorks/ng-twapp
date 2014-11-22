'use strict';
/*var driversController, scope;

beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

  // Here, we create a mock scope variable, to replace the actual $scope variable
  // the controller would take as parameter
  scope = $rootScope.$new();

  // Then we create an $httpBackend instance. I'll talk about it below.
  httpMock = $httpBackend;

  // Here, we set the httpBackend standard reponse to the URL the controller is
  // supposed to retrieve from the API
  httpMock.expectJSONP(
	  "/scripts/compare-phone-module/services/phone-details-data.json").respond(
			  [
			    {

			        	"phoneName":"Nokia Lumia 635",
			            "value": "PhoneId1",
			            "image":"/images/iphone.jpeg"
			    },
			    {
			       		"phoneName":"Samsung Galaxy S 4",
			            "value": "PhoneId2",
			            "image":"/images/iphone.jpeg"
			    },
			     {
			       		"phoneName":"Samsung Galaxy Note III",
			            "value": "PhoneId3",
			            "image":"/images/iphone.jpeg"
			    },
			     {
			       		"phoneName":"Apple iPhone 6",
			            "value": "phoneId4",
			            "image":"/images/iphone.jpeg"
			    }
			]
  );

  // Here, we actually initialize our controller, passing our new mock scope as parameter
  driversController = $controller('ComparePhoneController', {
    $scope: scope
  });

  // Then we flush the httpBackend to resolve the fake http call
  httpMock.flush();

}));


// Now, for the actual test, let's check if the driversList is actually retrieving
//  the mock driver array
it('should return a list with three drivers', function () {
  expect(scope.phoneDetails.length).toBe(3);
});

// Let's also make a second test checking if the drivers attributes match against
// the expected values
it('should retrieve the family names of the drivers', function () {
  expect(scope.driversList[0].Driver.familyName).toBe("Vettel");
  expect(scope.driversList[1].Driver.familyName).toBe("Alonso");
  expect(scope.driversList[2].Driver.familyName).toBe("Webber");
});*/

/*describe("ng-twapp.comparePhone", function () {

    beforeEach(module('ng-twapp.comparePhone'));

    describe("ComparePhoneController", function () {

        var scope, httpBackend;
        beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when("get", "/scripts/compare-phone-module/services/phone-details-data.json").respond([{}, {}, {}]);
            $controller('ComparePhoneController', {
                $scope: scope,
                $http: $http
            });
        }));

        it("should have 3 movies", function () {
            httpBackend.flush();
            expect(scope.phoneDetails.length).toBe(3);
        });
    });
});*/
