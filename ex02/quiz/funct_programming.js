var animals = [ 
  { name: 'flufflykins', species: 'rabbit' },
  { name: 'Caro', species: 'cat' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' } ];

var names = animals.map(anim => anim.name);
console.log(names);

