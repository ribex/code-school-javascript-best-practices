var toolsForTheBug = [
  {bug: 'termite', tool: 'trebuchet'},
  {bug: 'slug', tool: 'sling'},
  {bug: 'caterpillar', tool: 'catapult'}
];

var toolAssignment = function(number, tool) {
  toolsForTheBug[number].tool = tool;
};

toolAssignment(1, 'Sausage');
