// const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(num) {
  let directors = num.map (function (movie){
    return movie.director
  });
  
  return directors
}
 console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(num) {

  let Steven = num.filter( function(best){
    return best.director === 'Steven Spielberg' && best.genre.includes('Drama')
  });

  return Steven;

}

  console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(num) {
  let average = num.reduce (function(a,b){
    return a+b.score;
  },0)

  return Number((average / num.length).toFixed(2))

}
console.log(scoresAverage(movies))



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(num) {
  let filter = num.filter(function (fil){
    return fil.genre.includes('Drama')
  })
  let average = filter.reduce (function(a,b){
   return a+b.score
   },0)
  
  return Number((average / filter.length).toFixed(2))
}
console.log(dramaMoviesScore(movies))
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(num) {
  let yearLol = [...num];
  yearLol.sort(function (a,b){
    if(a.year === b.year){
      return a.title.localeCompare(b.tittle);
    } else{
    return a.year - b.year
    }
  },0)
  return yearLol;
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically
  };
}
