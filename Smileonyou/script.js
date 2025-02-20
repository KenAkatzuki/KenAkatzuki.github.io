document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  function changeTab(tabId) {
    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
  }

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
      changeTab(tabId);
    });
  });

  // Initialize default tab
  changeTab("chamber");

  // Random Logo Image
  function fetchRandomLogo() {
    const logoUrl = `https://api.multiavatar.com/${Math.floor(Math.random() * 1000)}.png`;
    document.getElementById("logo").src = logoUrl;
  }
  fetchRandomLogo();

  // Time Display Handling
  function updateTime() {
    const timeZone = document.getElementById("time-selector").value;
    const now = new Date();

    let options = { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone };
    document.getElementById("time-display").textContent = new Intl.DateTimeFormat("en-US", options).format(now);
  }

  document.getElementById("time-selector").addEventListener("change", updateTime);
  setInterval(updateTime, 1000); // Update every second
  updateTime(); // Initialize

  // Collapsible Search Bar
  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("search");

  searchContainer.addEventListener("click", function () {
    searchContainer.classList.add("active");
    searchInput.focus();
  });

  document.addEventListener("click", function (event) {
    if (!searchContainer.contains(event.target)) {
      searchContainer.classList.remove("active");
    }
  });

  // Search Functionality
  function searchContent() {
    let input = searchInput.value.toLowerCase();
    let tableRows = document.querySelectorAll("#game-list tbody tr");

    tableRows.forEach((row) => {
      let gameName = row.cells[0].textContent.toLowerCase();
      row.style.display = gameName.includes(input) ? "" : "none";
    });
  }

  searchInput.addEventListener("input", searchContent);
});
