(function () {
    var app = angular.module("NoteApplication", []);
    
    app.controller("GralCtrl" , ["$scope", function ($scope) {
        function Policy(pN = "", phN = "", doP = "", depD = "", retD = "", pH = {name : "", email : "", phone : "", address : ""}pH) {
            this.pN = pN;
            this.doP = doP;
            this.depD = depD;
            this.retD = retD;
            this.pH = pH;
        };
        function FNOL(filedD = "", incD = "", benInfo = [{claimN : "", benefit : "", reason : "", amountClaimed : ""}]) {
            this.filedD = filedD;
            this.incD = incD;
            this.benInfo = benInfo;
        };
        $scope.select {
            cTs : [{id: 0, name : "FNOL"}, {id : 1, name : "Cancellation"}, {id : 2, name : "General Inquiry"}]
        };
        $scope.data = {
            cT : $scope.select.cTs[0],
            pol : new Policy(),
            fnol : new FNOL()
        };
    }])
})();
