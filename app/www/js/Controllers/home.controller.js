angular.module('starter.controller.home', [])
.controller('HomeController', function ($scope) {
	 $scope.playlists = [
    { title: 'Get Food', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})