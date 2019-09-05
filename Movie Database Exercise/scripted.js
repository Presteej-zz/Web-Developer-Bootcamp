movieArray = [
  {
    name: "The Dark Knight",
    rating: 4.5,
    hasWatched: false
  },
  {
    name: "Aquaman",
    rating: 3,
    hasWatched: true
  },
  {
    name: "The Dark Knight Rises",
    rating: 5,
    hasWatched: false
  },
  {
    name: "The Incredibles",
    rating: 3.5,
    hasWatched: true
  },
  {
    name: "The Incredibles 2",
    rating: 4,
    hasWatched: true
  }
];

function movieInformation() {
  for (var i = 0; i < movieArray.length; i++) {
    if (movieArray[i].hasWatched === true) {
      console.log(
        "You have watched '" +
          movieArray[i].name +
          "' - " +
          movieArray[i].rating +
          " stars."
      );
    } else {
      console.log(
        "You have not seen '" +
          movieArray[i].name +
          "' - " +
          movieArray[i].rating +
          " stars."
      );
    }
  }
}
