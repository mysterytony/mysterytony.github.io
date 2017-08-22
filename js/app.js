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

	$scope.bgsrc = "https://source.unsplash.com/random";
	
	$scope.linkClick = function (name) {
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
			}

		} else {
			// go up
			$scope.links = $scope.contents;
			$scope.content_title = "Course Notes";
		}
	};

	$state.go('app.home', {})
});

app.controller('HomeCtrl', function ($scope, $interval) {
	$scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
	$interval(function() {
		$scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
	}, 1000);
});

app.controller('ViewerCtrl', function ($scope, $stateParams, $http) {
	componentHandler.upgradeAllRegistered();
	if (("" + $stateParams.filename).endsWith('.pdf')) {
		window.open("notes/" + $stateParams.foldername + "/" + $stateParams.filename);
		$("#viewer-card").html("Notes are shown in a separate window");
	} else {
		$http.get("notes/" + $stateParams.foldername + "/" + $stateParams.filename).then(function (response) {
			var body = {
				"text": response.data,
				"mode": "markdown"
			}
			$http.post("https://api.github.com/markdown", JSON.stringify(body)).then(function(result) {
				$("#viewer-card").html(result.data);
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			});

		});
	}

	$scope.printContent = function() {
		var newWindow = window.open();
	

		var script = `$(function () {
      window.componentHandler.upgradeAllRegistered();
      MathJax.Hub.Config({
        config: ["MMLorHTML.js"],
        extensions: ["tex2jax.js"],
        jax: ["input/TeX"],
        tex2jax: {
          inlineMath: [
            ['$', '$']
          ],
          displayMath: [
            ['$$', '$$']
          ],
          processEscapes: false
        },
        TeX: {
          extensions: ["AMSmath.js", "AMSsymbols.js"],
          TagSide: "right",
          TagIndent: ".8em",
          MultLineWidth: "85%",
          equationNumbers: {
            autoNumber: "AMS",
          },
          unicode: {
            fonts: "STIXGeneral,'Arial Unicode MS'"
          }
        },
        showProcessingMessages: false
      });
		});`;
		
		newWindow.document.write($("#viewer-card").html());
		var my_awesome_script = newWindow.document.createElement('script');
		
		my_awesome_script.innerHTML = script;
		
		newWindow.document.head.appendChild(my_awesome_script);
	}

});

app.controller('EmailCtrl', function($scope) {

});