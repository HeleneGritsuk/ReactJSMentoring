const filmsMockArray = [
  {
    title: "Kill Bill",
    poster_path:
      "http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg",
    release_date: 2014,
    id: 1,
    genres: ["Action", "Adventure", "Comedy"]
  },
  {
    title: "The Wolf of Wall Street",
    poster_path:
      "https://image.tmdb.org/t/p/w500/vK1o5rZGqxyovfIhZyMELhk03wO.jpg",
    release_date: "2013-12-25",
    id: 2,
    genres: ["Crime", "Drama", "Comedy"]
  }
];
const filmMock = {
  budget: 104000000,
  genres: ["Action", "Adventure", "Comedy"],
  id: 343668,
  overview:
    "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
  poster_path:
    "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
  release_date: "2017-09-20",
  revenue: 394247609,
  runtime: 141,
  tagline: "Reports of my death have been greatly exaggerated.",
  title: "Kingsman: The Golden Circle",
  vote_average: 7,
  vote_count: 319
};
const filmInfoMock = {
  budget: 104000000,
  genres: (3)[("Action", "Adventure", "Comedy")],
  id: 343668,
  overview:
    "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
  poster_path:
    "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
  release_date: "2017-09-20",
  revenue: 394247609,
  relatedFilms: [
    {
      budget: 104000000,
      genres: (3)[("Action", "Adventure", "Comedy")],
      id: 343668,
      overview:
        "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
      release_date: "2017-09-20",
      revenue: 394247609,
      runtime: 141,
      tagline: "Reports of my death have been greatly exaggerated.",
      title: "Kingsman: The Golden Circle",
      vote_average: 7,
      vote_count: 319
    },
    {
      budget: 104000000,
      genres: (3)[("Action", "Adventure", "Comedy")],
      id: 343668,
      overview:
        "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
      release_date: "2017-09-20",
      revenue: 394247609,
      runtime: 141,
      tagline: "Reports of my death have been greatly exaggerated.",
      title: "Kingsman: The Golden Circle",
      vote_average: 7,
      vote_count: 319
    }
  ],
  runtime: 141,
  tagline: "Reports of my death have been greatly exaggerated.",
  title: "Kingsman: The Golden Circle",
  vote_average: 7,
  vote_count: 319
};

export { filmsMockArray, filmMock, filmInfoMock };
