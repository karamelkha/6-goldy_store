const tabHeaders = document.querySelectorAll("[data-tab]");

const contentBoxes = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabHeaders.forEach(function (item) {
      item.classList.remove("ellipse--active");
    });
    tab.classList.add("ellipse--active");

    contentBoxes.forEach(function (content) {
      content.classList.add("hidden");
    });
    document
      .querySelector(`[data-tab-content=${this.dataset.tab}]`)
      .classList.remove("hidden");
  });
});
