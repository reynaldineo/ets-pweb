let mobilemenu = document.querySelector(".mobile");
let menuBtn = document.querySelector(".menuBtn");
let menuBtnDisplay = true;

menuBtn.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});

$(document).ready(function () {
  $("#searchInput").on("input", function () {
    performSearch();
  });

  $("#searchInputMobile").on("input", function () {
    performSearchMobile();
    console.log("hey");
  });

  function performSearch() {
    const keyword = $("#searchInput").val().toLowerCase();
    searchCards(keyword);
  }

  function performSearchMobile() {
    const keyword = $("#searchInputMobile").val().toLowerCase();
    searchCards(keyword);
  }

  function searchCards(keyword) {
    $(".card").each(function () {
      const titleText = $(this).find("h4").text().toLowerCase();
      const authorText = $(this).find(".author").text().toLowerCase();

      if (titleText.includes(keyword) || authorText.includes(keyword)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
});
