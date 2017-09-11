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
      url: '/viewer/:filepath',
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

  var dialog = document.querySelector('dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  $scope.closeDialog = function() {
    dialog.close();
  }

  $http.get("content.json").then(function (response) {
    $scope.tree = new Folder(response.data.name, response.data.folder, response.data.description, null);

    let docs = [];
    for (let doc of response.data.docs) {
      docs.push(constructFolderTree($scope.tree, doc));
    }

    let folders = [];
    for (let folder of response.data.folders) {
      folders.push(constructFolderTree($scope.tree, folder));
    }
    $scope.tree.setDocsAndFolders(docs, folders);

    function constructFolderTree(parentFolder, jsonData) {
      if (jsonData.hasOwnProperty('folder')) {
        // currently it is a folder
        let folder = new Folder(jsonData.name, jsonData.folder, jsonData.description, parentFolder);
        let subDocs = [];
        for (let subdoc of jsonData.docs) {
          subDocs.push(constructFolderTree(folder, subdoc));
        }
        
        let subFolders = [];
        for (let subfolder of jsonData.folders) {
          folders.push(constructFolderTree(subfolder, subfolder));
        }

        folder.setDocsAndFolders(subDocs, subFolders);
        return folder;
      } else if (jsonData.hasOwnProperty('doc')){
        // currently it is a doc
        let doc = new Doc(jsonData.name, jsonData.doc, jsonData.description, parentFolder);
        return doc;
      }
    }
  });

  $scope.bgsrc = "https://unsplash.it/1920/1080?random";
  
  $scope.clickDoc = function(i) {
    if ($scope.tree.docs[i]) {
      $location.path("app/viewer/" + $scope.tree.docs[i].getPath());
    } else {
      $scope.showDialog('Warning', 'Requested Document Couldn\'t be Found!');
    }
  }

  $scope.clickFolder = function(i) {
    if ($scope.tree.folders[i]) {
      $scope.tree = $scope.tree.folders[i];
    } else {
      $scope.showDialog('Warning', 'Requested Folder Couldn\'t be Found!');
    }
  }

  $scope.showDialog = function(title, message) {
    $scope.dialogTitle = title;
    $scope.dialogContent = message;
    var dialog = document.querySelector('dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }

  $scope.showUpdates = function() {
    $http.get("update").then(function(response){
      $scope.showDialog("Website Update", response.data);
    });
  }
  
  $scope.goBack = function() {
    // go back
    if ($scope.tree.parentFolder) {
      $scope.tree = $scope.tree.parentFolder;
    } else {
      $scope.showDialog('Warning', 'Requested Folder Couldn\'t be Found!');
    }
  }

  $state.go('app.home', {})
});

app.controller('HomeCtrl', function ($scope, $interval) {

});

app.controller('ViewerCtrl', function ($scope, $stateParams, $http) {
  componentHandler.upgradeAllRegistered();
  $stateParams.filepath = $stateParams.filepath.split(',').join('/');
  if (($stateParams.filepath).endsWith('.md')) {
    $http.get($stateParams.filepath).then(function (response) {
      var md = window.markdownit();
      var result = md.render(response.data);
      $("#viewer-card").html(result);
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    });
  } else {
    window.open($stateParams.filepath);
    $("#viewer-card").html("Notes are shown in a separate window");
  }

  $scope.printContent = function() {
    $http.get('/views/print.html').then(function(response) {
      let printWindow = window.open('', '_blank');
      response.data = response.data.replace('{{md-body}}', $("#viewer-card").html());
      printWindow.document.write(response.data);
    });
    
  }

});

app.controller('EmailCtrl', function($scope) {

});

class Doc {
  constructor(name, doc, description, parentFolder) {
    this.name = name;
    this.doc = doc;
    this.description = description;
    this.parentFolder = parentFolder;
  }

  getPath() {
    return this.parentFolder.getPath() + ',' + this.doc;
  }
}


class Folder {
  constructor(name, folder, description, parentFolder) {
    this.name = name;
    this.folder = folder;
    this.description = description;
    this.parentFolder = parentFolder;
  }

  setDocsAndFolders(docs, folders) {
    this.docs = docs;
    this.folders = folders;
  }

  getPath() {
    if (!this.parentFolder) return this.folder;

    return this.parentFolder.getPath() + ',' + this.folder;
  }
}