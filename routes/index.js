var express = require("express");
const HTTP = require("http");

var router = express.Router();

/* GET home page. */

router.get("/movies", (req, res, next) => {
  const path = "https://api.themoviedb.org/3/account/21124506/lists?page=1";

  const headers = {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY3YjZmNTcyMjM3YjEwMWQ4MGU0ZjBjMzM4MzVhZiIsInN1YiI6IjY1ZmI5ZjI2N2Y2YzhkMDE3YzZiY2U5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7IP5Y7HDRYyhx2OMWfo2geBVFjcbBxpH_ODMWR3jm0",
  };

  HTTP.request({ method: "GET", path, headers }, (response) => {
    console.log(response);
  });
  // const data = await axios.get(url, { headers });

  // res.json(data.json());
  // .then((json) => console.log(json))
  // .catch((err) => console.error("error:" + err));
  // res.json({ status: 200, data });
});
router.get("/", function (req, res, next) {
  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error("error:" + err));

  const items = [
    {
      title: "Supergirl",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/supergirl.jpg",
      ageRating: 16,
    },
    {
      title: "Captain Marvel",

      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/captain-marvel.png",
      ageRating: 16,
    },
    {
      title: "Infinity Train",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/cartoons/demon-slayer.jpg",
      ageRating: 16,
    },
    {
      title: "Bloodshot",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/blood-shot.jpg",
      ageRating: 16,
    },
    {
      title: "Wanda Vision",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/wanda.png",
      ageRating: 16,
    },
    {
      title: "The Dark Knight",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/bat-man.jpg",
      ageRating: 16,
    },
    {
      title: "Theatre of the dead",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/wanda.png",

      ageRating: 16,
    },
    {
      title: "Transformer",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/transformer.jpg",
      ageRating: 16,
    },
    {
      title: "Resident Evil",
      rating: 9.5,
      duration: "120 mins",
      image: "./images/movies/resident-evil.jpg",
      hd: "HD",

      ageRating: 16,
    },
    {
      title: "Captain Marvel",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/captain-marvel.png",
      ageRating: 16,
    },
    {
      title: "Hunter Killer",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/hunter-killer.jpg",
      ageRating: 16,
    },
    {
      title: "Bloodshot",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/blood-shot.jpg",
      ageRating: 16,
    },
    {
      title: "Call",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/movies/call.jpg",
      ageRating: 16,
    },

    {
      title: "Stranger Things",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/stranger-thing.jpg",
      ageRating: 16,
    },
    {
      title: "Star Trek",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/star-trek.jpg",
      ageRating: 16,
    },
    {
      title: "Penthouses",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/penthouses.jpg",
      ageRating: 16,
    },
    {
      title: "Mandalorian",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/mandalorian.jpg",
      ageRating: 16,
    },
    {
      title: "The Falcon And The Winter Soldier",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/the-falcon.webp",
      ageRating: 16,
    },
    {
      title: "Wanda Vision",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      image: "./images/series/wanda.png",
      ageRating: 16,
    },
    {
      title: "Demon Slayer",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
    {
      title: "Croods",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
    {
      title: "Dragonball",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
    {
      title: "Over The Moon",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
    {
      title: "Weathering With You",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
    {
      title: "Your Name",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
    {
      title: "Coco",
      rating: 9.5,
      duration: "120 mins",
      hd: "HD",
      ageRating: 16,
    },
  ].filter((row) => row.image?.length);

  res.render("index", { title: "Express", items });
});

module.exports = router;
