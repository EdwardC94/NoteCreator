(function() {
	var app = angular.module("NoteCreator", []);
	function Policy(){
		this.pn = "";
		this.phn = "";
		this.dop = "";
		this.depD = "";
		this.retD = "";
		this.price = "";
		this.cardBrand = "";
		this.l4d = "";
		this.email = "";
		this.address = "";
		this.phone = "";							
	};
	function FNOL() {
	    Policy.call(this);
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
		$scope.benefits = [
			{id: 0, name: "Select a benefit", exp : "" },
			{id: 1, name: "Trip Cancellation", exp : "their trip was cancelled" },
			{id: 2, name: "Trip Interruption", exp: "they have to come back earlier from their trip"},
			{id: 3, name: "Travel Delay", exp: "their trip was delayed"},
			{id: 4, name: "Baggage Coverage", exp: "their baggage is lost/stolen/damaged"},
			{id: 5, name: "Baggage Delay", exp: "their baggage was delayed"},
			{id: 6, name: "Missed Connection", exp: "they missed their connecting flight"}
			];
	    $scope.reason = [
			{id: 0, name: "Claim reason", exp : "" },
			{id: 1, name: "Common Carrier delay", exp : "a delay by the common carrier" },
			{id: 2, name: "Illness/Injury of Insured", exp: "a serious illness/injury of an insured on this Policy"},
			{id: 3, name: "Illness/Injury of FM", exp: "a serious illness/injury of a familiy member of an insured on this Policy"},
			{id: 4, name: "Illness/Injury of TC", exp: "a serious illness/injury of a traveling companion of the insured on this Policy"},
			{id: 5, name: "Bad weather", exp: "bad weather while en route"},
			{id: 6, name: "Death of a family member", exp: "the death of a family member of one of the insureds on this Policy"}
			];
	    $scope.selBen = {id: 0, name: "Select a reason", exp : "" };
	    $scope.selReas = {id: 0, name: "Claim reason", exp : "" };
	    $scope.data = new FNOL();
	    $scope.clear = function() {
	        $scope.data = new FNOL();
    	    $scope.selBen = {id: 0, name: "Select a reason", exp : "" };
    	    $scope.selReas = {id: 0, name: "Claim reason", exp : "" };
	    };
		$scope.copy = function() {
			copy('#fnol_note');
		};
	}]);
	app.controller("GralInqCtrl", ["$scope", function($scope){
	    $scope.data = new FNOL();
	    $scope.natCall = ["Nature of the call", "Coverage question", "Claim follow-up", "Modify Policy", "Purchase insurance"];
	    $scope.selReason = $scope.natCall[0];
	    /*The objects specific to covered reasons notes*/
	    $scope.cov_options = {
	        checked : true,
	        reason : ""
	    }
	    $scope.test = "Works!!!"
	}]);
})();
