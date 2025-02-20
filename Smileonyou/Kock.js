document.addEventListener("DOMContentLoaded", function () {
  function changeTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.add("hidden");
    });

    document.getElementById(tabName).classList.remove("hidden");
  }

  // Attach event listeners to all navbar links
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents page reload
      let tabName = this.getAttribute("onclick").match(/'([^']+)'/)[1];
      changeTab(tabName);
    });
  });
});
