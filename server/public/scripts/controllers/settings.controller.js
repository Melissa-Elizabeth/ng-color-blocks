colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory){
  console.log("settings controller running");

  var self = this;
  self.color = DataFactory.allColors;
self.newColor = "";



  self.addColor = function() {

       DataFactory.newColor();
       DataFactory.newColor(angular.copy(self.newColor));
    self.newColor = '';

   };
}]);
