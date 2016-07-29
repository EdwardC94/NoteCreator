(function() {
	var app = angular.module("NoteCreator", []);
	function Policy(availableOptions){
		this.pn = "";
		this.phn = "";
		this.email = "";
		this.dop = "";
		this.doe = "";
		this.amntRef = "";
		this.cardBrand = "";
		this.l4d = "";
		this.availableOptions= availableOptions || [];
		this.selectedOption= availableOptions[0] || null; //This sets the default value of the select in the ui								
	};
	Policy.prototype.copy = function(selector) {
		var urlField = document.querySelector(selector);
		var range = document.createRange();  
		range.selectNode(urlField);
		window.getSelection().addRange(range);
		document.execCommand('copy');				
		window.getSelection().removeAllRanges();
	};
	app.controller("CancellationCtrl", ["$scope", function($scope){
    	var availableOptions = [
    	    {id: '0', reason: 'Cancellation Reason', exp: ''},
    	    {id: '1', reason: 'Unintended Purchase', exp: 'the customer made the purchase of the Policy by mistake'},
    	    {id: '2', reason: 'Satisfaction Guarantee', exp: 'the customer is not satisfied with the coverage on the Policy and wants to cancel it'},
    	    {id: '3', reason: 'Duplicate', exp: 'the customer is covered by other insurance Policy'},
    	    {id: '4', reason: 'Did not pick up rental', exp: 'the reservation of the car was cancelled'},
    	    {id: '5', reason: 'AGA not accepted by Car Rental Agency', exp: 'the customer had to purchase insurance from a different Company, because the Car Rental Agency would not accept AGAs'}
    	    ];
	    $scope.data = new Policy(availableOptions);
		$scope.clear = function(){
			$scope.data = new Policy(availableOptions);
		};
		$scope.copy = $scope.data.copy('#canc_note');
		/*
		$scope.copy = function() {
			var urlField = document.querySelector('#canc_note');
			var range = document.createRange();  
			range.selectNode(urlField);
			window.getSelection().addRange(range);
			document.execCommand('copy');				
			window.getSelection().removeAllRanges();
		};*/

	}])	
})();
