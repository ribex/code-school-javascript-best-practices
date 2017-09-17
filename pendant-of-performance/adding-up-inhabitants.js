Array.prototype.killTheInsolent = function(){};
Array.prototype.countPopulace = function(){};
Array.prototype.countUndeadPopulace = function(){};
Array.prototype.insecticide = function(){};
Array.prototype.shadowProvider = function(){};

var invertedPeninsula = {
  inhabitants: ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script']
};

function populationGetter(){
  var population = invertedPeninsula.inhabitants;
  var list = "";
  console.time("List");

  for(var i = 0, ff = population.length; i < ff; i++){
    list += (population[i] + " ");
  }

  console.timeEnd("List");
  return list.trim();
}

populationGetter();
