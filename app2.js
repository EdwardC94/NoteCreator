(function () {
    var app = angular.module("NoteApplication", []);
    
    app.controller("GralCtrl" , ["$scope", function ($scope) {
        $scope.select = {
            cTs : [
                {id: 0, name : "FNOL"},
                {id : 1, name : "Cancellation"},
                {id : 2, name : "General Inquiry"}],
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
                {id: 7, name: "Military obligations", exp: "their personal leave was revoked or they were reassigned while working in the U.S. Army"}
                ]
        };
        $scope.test = $scope.select.reas[0];
        function Policy(pN = "", doP = "", depD = "", retD = "", pH = {name : "", email : "", phone : "", address : ""}) {
            this.pN = pN;
            this.doP = doP;
            this.depD = depD;
            this.retD = retD;
            this.pH = pH;
        };
        function FNOL(filedD = '', incD = '', benInfo = {claimN : '', benefit : $scope.select.bens[0], reason : $scope.select.reas[0], amountClaimed : ''}) {
            this.filedD = filedD;
            this.incD = incD;
            this.benInfo = benInfo;
        };
        $scope.cT = $scope.select.cTs[0];
        $scope.data = [{pol : new Policy(), fnol : new FNOL()}];
        $scope.addOne = function() {
            $scope.data.push({pol : new Policy(), fnol : new FNOL()});
        };
        $scope.removeOne = function() {
            $scope.data.pop();
        };
        $scope.toString = function() {
            let note = "";
            var pol = $scope.data[0].pol;
            var fnol = $scope.data[0].fnol;
            switch($scope.cT.name) {
                case "FNOL" :
                    note = "<p>"pol.pH.name.concat(" called in to file a claim because ").concat(fnol.benInfo.benefit.exp).concat("</p>");
                    break;
            };
            return note;
        };
    }])
})();
