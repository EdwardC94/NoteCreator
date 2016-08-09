(function () {
    var app = angular.module("NoteApplication", []);
    
    app.controller = angular.controller("GralCtrl" , ["$scope", function ($scope) {
        function Policy(pN = "", phN = "", doP = "", depD = "", retD = "" ) {
            this.pN = pN;
            this.phN = phN;
            this.doP = dop;
            this.depD = depD;
            this.retD = retD;
        };
        
        $scope.data = {
            
        };
    }])
})();
