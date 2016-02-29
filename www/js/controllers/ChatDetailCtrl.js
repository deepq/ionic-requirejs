define([], function (app) {
    function ChatDetailCtrl($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    }

    ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];
    return ChatDetailCtrl;
});