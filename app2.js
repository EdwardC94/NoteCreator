(function () {
    var app = angular.module("NoteApplication", []);
    
    app.controller("GralCtrl" , ["$scope", function ($scope) {
        function Policy(pN = "", phN = "", doP = "", depD = "", retD = "", insureds = [{name : "", email : "", phone : "", address : ""}]) {
            this.pN = pN;
            this.doP = dop;
            this.depD = depD;
            this.retD = retD;
            this.insureds = insureds;
        };
        function FNOL(filedD = "", incD = "", benInfo = [{claimN : "", benefit : "", reason : "", amountClaimed : ""}]) {
            this.filedD = filedD;
            this.incD = incD;
            this.benInfo = benInfo;
        };
        $scope.cTs = [{id: 0, name : "FNOL"}, {id : 1, name : "Cancellation"}, {id : 2, name : "General Inquiry"}]
        $scope.data = {
            cT : $scope.callTypes[0],
            pol : new Policy(),
            fnol : new FNOL()
        };
    }])
})();
