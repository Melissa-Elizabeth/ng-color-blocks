colorBlocks.factory('DataFactory', function() {

  console.log("data factory running");

  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  getColor();

    function getColor() {
      colors.push();
    }


return {
  allColors: colors,
  newColor: getColor

};
});
