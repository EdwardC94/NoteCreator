(function() {
	var app = angular.module("NoteCreator", []);
	function Policy(){
		this.pn = "";
		this.phn = "";
		this.dop = "";
		this.doe = "";
		this.price = "";
		this.cardBrand = "";
		this.l4d = "";
		this.email = "";
		this.address = "";
		this.phone = "";/*
		this.availableOptions= availableOptions || [];
		this.selectedOption= availableOptions[0] || null; //This sets the default value of the select in the ui	*/							
	};
	function FNOL() {
	    this.dateFiled = "";
	    this.incDate = "";
	    this.amountClaimed = "";
	    this.addInfo = "";
	}
	function copy (selector) {
		var urlField = document.querySelector(selector);
		var range = document.createRange();  
		range.selectNode(urlField);
		window.getSelection().addRange(range);
		document.execCommand('copy');				
		window.getSelection().removeAllRanges();
	};
	app.controller("CancellationCtrl", ["$scope", function($scope){
    	$scope.availableOptions = [
    	    {id: '0', reason: 'Cancellation Reason', exp: ''},
    	    {id: '1', reason: 'Unintended Purchase', exp: 'the customer made the purchase of the Policy by mistake'},
    	    {id: '2', reason: 'Satisfaction Guarantee', exp: 'the customer is not satisfied with the coverage on the Policy and wants to cancel it'},
    	    {id: '3', reason: 'Duplicate', exp: 'the customer is covered by other insurance Policy'},
    	    {id: '4', reason: 'Did not pick up rental', exp: 'the reservation of the car was cancelled'},
    	    {id: '5', reason: 'AGA not accepted by Car Rental Agency', exp: 'the customer had to purchase insurance from a different Company, because the Car Rental Agency would not accept AGAs'}
    	    ];
	    $scope.selectedOption = $scope.availableOptions[0];
	    $scope.data = new Policy();
		$scope.clear = function(){
			$scope.data = new Policy();
			$scope.selectedOption = $scope.availableOptions[0];
		};
		$scope.copy = function() {
			copy('#canc_note');
		};
	}]);
	app.controller("FNOLCtrl", ["$scope", function($scope){
	    $scope.availableOptions = {
	        benefit : ["Trip Cancellation", "Travel Delay", "Baggage Coverage", "Baggage Delay"],
            reason : ["Illness of Insured", "Illness of family member", "Illness of TC", "Not a named peril", "Have to work during trip"
                ]
	    };
	    $scope.selectedOptions = {
	        benefit : "",
	        reason : ""
	    };
	    $scope.data = {
	        policy: new Policy();,
	        FNOL : new FNOL();
	    };
	    $scope.clear = function() {
	        $scope.data = {
	        policy: new Policy();,
	        FNOL : new FNOL();
	        };
	        $scope.selectedOptions = {
	        benefit : "",
	        reason : ""
	        };
	    }
	}]);
})();
