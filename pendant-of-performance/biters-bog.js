var bitersBog = {
  critters: ['Nipping Global Variable', 
             'Sneaky For-in', 
             'Bulging Blocking Script']
};

populationGetter(bitersBog); 

function populationGetter(location) {
  var list = '';
  for (var i = 0, numCritters = location.critters.length; i < numCritters; i++) {
    list += location.critters[i];
  }
  return list.trim();
}