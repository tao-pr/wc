/**
 * WC executable
 */ 

var colors = require('colors');
var F      = require('./lib/fundamental');


F.loadTournament(1).then((tours) => {

  var tour = tours[0]

  // console.log(tour)
  for (let i=0; i<2; i++){
    console.log('GROUP : ', i)
    console.log(tour.round[32][i])
    console.log(tour.round[32][i].fixture.map((m) => m.home + ' v ' + m.away))
  }
})