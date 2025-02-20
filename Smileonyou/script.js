document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  function changeTab(tabId) {
    // Hide all tab content
    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.classList.remove("active");
    });

    // Show the selected tab
    document.getElementById(tabId).classList.add("active");
  }

  // Attach event listeners to navbar links
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
      changeTab(tabId);
    });
  });

  // Initialize the first tab as active
  changeTab("home");

  // Search functionality
  function searchContent() {
    let input = document.getElementById("search").value.toLowerCase();
    let tableRows = document.querySelectorAll("#game-list tbody tr");

    tableRows.forEach((row) => {
      let gameName = row.cells[0].textContent.toLowerCase();
      if (gameName.includes(input)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  // Attach search function to input event
  document.getElementById("search").addEventListener("input", searchContent);
});
