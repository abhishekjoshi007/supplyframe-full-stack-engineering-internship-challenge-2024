$(document).ready(() => {
  setTimeout(function () {
    $(".preloader").css({ display: "none" });
  }, 500);

  $(".text-field").on("change", (e) => {
    const movies = [
      {
        title: "Supergirl",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Captain Marvel",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Infinity Train",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Bloodshot",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Wanda Vision",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "The Dark Knight",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Theatre of the dead",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Transformer",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Resident Evil",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Captain Marvel",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Hunter Killer",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Bloodshot",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Call",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Supergirl",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Stranger Things",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Star Trek",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Penthouses",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Mandalorian",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "The Falcon And The Winter Soldier",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
        ageRating: 16,
      },
      {
        title: "Wanda Vision",
        rating: 9.5,
        duration: "120 mins",
        hd: "HD",
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
    ];

    console.log(
      movies?.filter((row) =>
        row.title?.toLowerCase()?.includes(e.target.value?.toLowerCase())
      )
    );
  });
  $("#hamburger-menu").click(() => {
    $("#hamburger-menu").toggleClass("active");
    $("#nav-menu").toggleClass("active");
  });

  // setting owl carousel

  let navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  $("#hero-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true,
  });

  $("#top-movies-slide").owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });

  $(".movies-slide").owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
      500: {
        items: 2,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });
});
