(function () {
    var app = angular.module("NoteApplication", ['ngSanitize']);
    
    app.controller("GralCtrl" , ["$scope", "$sce", function ($scope, $sce) {
        $scope.select = {
            cTs : [
                {id: 0, name : "FNOL", url : 'templates/fnol.html'},
                {id : 1, name : "Cancellation", url : 'templates/cancellation.html'},
                {id : 2, name : "General Inquiry", url : 'templates/gralInq.html'}],
            bens : [
                {id : 0, name: 'Benefit', exp : ''},
                {id : 1, name: 'Trip Cancellation', exp : 'the trip covered by this Policy was cancelled'},
                {id : 2, name: 'Trip Interruption', exp : 'the trip covered by this Policy was interrupted'},
                {id : 3, name: 'Travel Delay', exp : 'the trip covered by this Policy was delayed'},
                {id : 4, name: 'Baggage Coverage', exp : 'the baggage insured through this Policy was lost/stolen/damaged during the trip'},
                {id : 5, name: 'Baggage Delay', exp : 'there was a dalay on the arrival of the baggage covered by this Policy'},
                {id : 6, name: 'CDW', exp : 'the rental car covered by this Policy suffered damage'},
                {id : 7, name: 'Medical Expenses', exp : 'there was a medical emergency during the trip covered by this Policy'}],
            reas : [
                {id: 0, name: "Claim reason", exp : "" },
                {id: 1, name: "Common Carrier delay", exp : "a delay by the common carrier" },
                {id: 2, name: "Illness/Injury of Insured", exp: "a serious illness/injury of an insured on this Policy"},
                {id: 3, name: "Illness/Injury of FM", exp: "a serious illness/injury of a familiy member of an insured on this Policy"},
                {id: 4, name: "Illness/Injury of TC", exp: "a serious illness/injury of a traveling companion of the insured on this Policy"},
                {id: 5, name: "Bad weather", exp: "bad weather while en route"},
                {id: 6, name: "Death of a family member", exp: "the death of a family member of one of the insureds on this Policy"},
                {id: 7, name: "Military obligations", exp: "their personal leave was revoked or they were reassigned while working in the U.S. Army"}],
            canc : [
        	    {id: 0, reason: 'Cancellation Reason', exp: ''},
        	    {id: 1, reason: 'Unintended Purchase', exp: 'the customer made the purchase of the Policy by mistake'},
        	    {id: 2, reason: 'Satisfaction Guarantee', exp: 'the customer is not satisfied with the coverage on the Policy and wants to cancel it'},
        	    {id: 3, reason: 'Duplicate', exp: 'the customer is covered by other insurance Policy'},
        	    {id: 4, reason: 'Did not pick up rental', exp: 'the reservation of the car was cancelled'},
        	    {id: 5, reason: 'AGA not accepted by Car Rental Agency', exp: 'the customer had to purchase insurance from a different Company, because the Car Rental Agency would not accept AGAs'},
        	    {id: 6, reason: "Other", exp: ""}
        	    ]
        };
        function Policy(pN, doP, depD, retD, pH, payment, cancellation, inquiry) {
            this.pN = "";
            this.doP = "";
            this.depD = "";
            this.retD = "";
            this.pH = = {name : "", email : "", phone : "", address : ""};
            this.payment = {amount : "", brand : "", l4d : ""};
            this.cancellation = $scope.select.canc[0];
            this.inquiry = {request : '', resolution : ''};
        };
        function FNOL(filedD, incD, benInfo, addInfo) {
            this.filedD = '';
            this.incD = '';
            this.benInfo = {claimN : '', benefit : $scope.select.bens[0], reason : $scope.select.reas[0], amountClaimed : ''};
            this.addInfo = '';
        };
        $scope.cT = $scope.select.cTs[0];
        $scope.data = [{pol : new Policy(), fnol : new FNOL()}];
        $scope.addOne = function() {
            $scope.data.push({pol : new Policy(), fnol : new FNOL()});
        };
        $scope.removeOne = function() {
            $scope.data.pop();
        };
        $scope.copy = function () {
    		var urlField = document.querySelector('#note-content');
    		var range = document.createRange();  
    		range.selectNode(urlField);
    		window.getSelection().addRange(range);
    		document.execCommand('copy');				
    		window.getSelection().removeAllRanges();
        };
        $scope.clear = function() {
            $scope.data.pop();
            $scope.data.push({pol : new Policy(), fnol : new FNOL()})
        } /*
        $scope.toString = function() {
            let note = "";
            var pol = $scope.data[0].pol;
            var fnol = $scope.data[0].fnol;
            switch($scope.cT.name) {
                case "FNOL" :
                    note = "<p>".concat(pol.pH.name).concat(" called in to file a claim because ").concat(fnol.benInfo.benefit.exp).concat(" due to ").concat(fnol.benInfo.reason.exp).concat("</p>").concat("<p>I assisted the PH to file a claim, for which I confirmed that the next information on the Policy was correct:</p>").concat("<ul><li>Policy Number :").concat(pol.pN).concat("</li></ul>");
                    break;
            };
            return $sce.trustAsHtml(note);
        };*/
    }])
})();
