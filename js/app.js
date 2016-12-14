var app = angular.module('Tonyli', ['ui.router', 'ngAnimate']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('app', {
			url: '/app',
			templateUrl: "views/app.html",
			controller: 'AppCtrl'
		})
		.state('app.home', {
			url: '/home',
			templateUrl: "views/home.html",
			controller: 'HomeCtrl'
		})
		.state('app.viewer', {
			url: '/viewer/:foldername/:filename',
			templateUrl: "views/viewer.html",
			controller: 'ViewerCtrl',
		})
		.state('app.email', {
			url: '/email',
			templateUrl: 'views/email.html',
			controller: 'EmailCtrl'
		});
	$urlRouterProvider.otherwise('/app/home');


});

app.run(function ($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		window.componentHandler.upgradeAllRegistered();
	});
});

app.controller('AppCtrl', function ($scope, $http, $state, $location) {
	window.componentHandler.upgradeAllRegistered();
	$scope.content_title = "Course Notes";

	var folderName = null;

	$http.get("content.json").then(function (response) {
		$scope.links = response.data;
		$scope.contents = response.data;
	});

	$http.get("http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US").then(function (response) {
		$scope.bgsrc = "http://www.bing.com/" + response.data.images[0].url;
	}, function (response) {
	});

	$scope.linkClick = (name) => {
		if (name !== "back") {
			// go down
			var result = $.grep($scope.contents, function (e) { return e.name === name; });
			if (result.length > 0) { // show lectures
				var r = result[0];
				$scope.links = r.lectures;
				$scope.content_title = result[0].name;
				folderName = result[0].folder;
			} else { // show one lecture
				result = $.grep($scope.links, function (e) { return e.name === name; });
				$location.path("app/viewer/" + folderName + "/" + result[0].file);
				var layout = document.querySelector('.mdl-layout');
				layout.MaterialLayout.toggleDrawer();
			}

		} else {
			// go up
			$scope.links = $scope.contents;
			$scope.content_title = "Course Notes";
		}
	};

});

app.controller('HomeCtrl', function ($scope, $interval) {
	$scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
	$interval(() => {
		$scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
	}, 1000);
});

app.controller('ViewerCtrl', function ($scope, $stateParams, $http) {
	if (("" + $stateParams.filename).endsWith('.pdf')) {
		window.open("notes/" + $stateParams.foldername + "/" + $stateParams.filename);
		$("#viewer-card").html("Notes are shown in a separate window");
	} else {
		$http.get("notes/" + $stateParams.foldername + "/" + $stateParams.filename).then((response) => {
			var body = {
				"text": response.data,
				"mode": "markdown"
			}
			$http.post("https://api.github.com/markdown", JSON.stringify(body)).then((result) => {
				$("#viewer-card").html(result.data);
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			});

		});
	}


});

app.controller('EmailCtrl', ($scope) => {

});