var list = document.getElementById('population'),
 inhabitants = ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script'],
 fragment = document.createDocumentFragment();

for (var i = 0, x = inhabitants.length; i < x; i++) {
  var element = document.createElement('li');
  element.appendChild(document.createTextNode(inhabitants[i]));
  fragment.appendChild(element);
}

list.appendChild(fragment);
