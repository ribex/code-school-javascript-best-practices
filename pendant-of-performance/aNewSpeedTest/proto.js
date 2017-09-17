var IP = ['Nipping Global Variable', 'Sneaky Forin', 'Bulging Blocking Script'],
GH = ['Switch Blocks', 'Pesky Gnat', 'Aiedra'],
inhabitants = [IP,GH];

var populationGetter = function(popn) {
  var list = '';
  for (var i = 0, x = popn.length; i < x; i++) {
    for (var j = 0; j < popn[i].length; j++) {
      list += (popn[i][j] + ', ');
    }
  }
  return list;
};

populationGetter(inhabitants);
var concatTest = new SpeedTest(populationGetter, inhabitants, 100000);
concatTest.startTest();