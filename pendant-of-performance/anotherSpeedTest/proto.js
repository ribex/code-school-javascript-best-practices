var IP = ['Nipping Global Variable', 'Sneaky Forin', 'Bulging Blocking Script'],
GH = ['Switch Blocks', 'Pesky Gnat', 'Aiedra'],
inhabitants = [IP,GH];

var populationGetterConcat = function(popn) {
  var list = '';
  for (var i = 0, x = popn.length; i < x; i++) {
    for (var j = 0; j < popn[i].length; j++) {
      list += (popn[i][j] + ', ');
    }
  }
  return list;
};

populationGetterConcat(inhabitants);

var populationGetterJoin = function(popn) {
  var list = [];
  for (var i = 0, x = popn.length; i < x; i++) {
    list.push(popn[i].join(', '));
  }
  return list.join(', ');
};

populationGetterJoin(inhabitants);

var concatTest = new SpeedTest(populationGetterConcat, inhabitants, 100000);
concatTest.startTest();
var joinTest = new SpeedTest(populationGetterJoin, inhabitants);
joinTest.startTest();