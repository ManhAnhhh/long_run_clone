$(document).ready(function () {
  $("#system-carosel").flickity({
    arrowShape: {
      x0: 10,
      x1: 55,
      y1: 45,
      x2: 60,
      y2: 40,
      x3: 20,
    },
  });
  function page_scroll2top() {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      "fast"
    );
  }
  $("#back-to-top-js").on("click", page_scroll2top)
});
