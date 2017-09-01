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

  // TODO: to be changed back later
  $http.get("content_poc.json").then(function (response) {
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

  // $scope.linkClick = function (name) {
  // 	var result = $.grep($scope.contents, function (e) { return e.name === name; });
  //   if (result.length > 0) { // show lectures
  //     var r = result[0];
  //     $scope.links = r.lectures;
  //     $scope.content_title = result[0].name;
  //     folderName = result[0].folder;
  //   } else { // show one lecture
  //     result = $.grep($scope.links, function (e) { return e.name === name; });
  //     $location.path("app/viewer/" + folderName + "/" + result[0].doc);
  //   }
  // };
  
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
  $scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $interval(function() {
    $scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);
});

app.controller('ViewerCtrl', function ($scope, $stateParams, $http) {
  componentHandler.upgradeAllRegistered();
  $stateParams.filepath = $stateParams.filepath.split(',').join('/');
  if (($stateParams.filepath).endsWith('.md')) {
    $http.get($stateParams.filepath).then(function (response) {
      var body = {
        "text": response.data,
        "mode": "markdown"
      }
      $http.post("https://api.github.com/markdown", JSON.stringify(body)).then(function(result) {
        $("#viewer-card").html(result.data);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      });

    });
  } else {
    window.open($stateParams.filepath);
    $("#viewer-card").html("Notes are shown in a separate window");
  }

  $scope.printContent = function() {
    var newWindow = window.open();
  

    var script = `
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
      });`;
    
    var md_style = newWindow.document.createElement('link');
    md_style.rel = "stylesheet";
    md_style.type = "text/css";
    md_style.href = "../style/md.css";

    var my_awesome_script = newWindow.document.createElement('script');
    my_awesome_script.innerHTML = script;
    
    var md_body = newWindow.document.createElement('div');
    md_body.className = 'markdown-body';
    md_body.innerHTML = $("#viewer-card").innerHTML;

    newWindow.document.appendChild(md_body);

    newWindow.document.head.appendChild(my_awesome_script);
    newWindow.document.head.appendChild(md_style);
    
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