define([], function (app) {
    function ChatsCtrl($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    }

    ChatsCtrl.$inject = ['$scope', 'Chats'];
    return ChatsCtrl;
});