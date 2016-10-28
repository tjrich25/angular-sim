var app = angular.module('sim', []);
// This is declaring a module. More on this in a moment
app.controller('addWord', function($scope){
$scope.wordList = ['hi', 'fun', 'Boot Camp',];
$scope.addWord = function() {
 $scope.word = $scope.wordList[Math.floor(Math.random() * $scope.wordList.length)];
};
$scope.phraseList = ['Syntax the dog', 'I love JS', 'Angular is a little confusing',];
$scope.addPhrase = function() {
 $scope.phrase = $scope.phraseList[Math.floor(Math.random() * $scope.phraseList.length)];
};
});
