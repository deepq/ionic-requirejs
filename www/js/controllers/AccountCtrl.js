define([], function (app) {
    function AccountCtrl($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }

    AccountCtrl.$inject = ['$scope'];
    return AccountCtrl;
});