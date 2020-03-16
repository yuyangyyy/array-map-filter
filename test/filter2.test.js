const keepStarks = require('../filter/ex2.js');

xdescribe('filter - exercice 2', () => {

  it('keepStarks', () => {
    expect(keepStarks([
      'Bran Stark',
      'Cersei Lannister',
      'Sandor Clegane',
      'Arya Stark',
      'Yara Greyjoy',
      'Sansa Stark'
    ]))
    .to.equal(['Bran Stark', 'Arya Stark', 'Sansa Stark']);
  });

});

