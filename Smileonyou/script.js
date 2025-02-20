document.addEventListener("DOMContentLoaded", function () {
  // Tab switching
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

  // Fetch a random logo (Pixel/Gaming Image from Pixabay)
  function fetchRandomLogo() {
    fetch("https://pixabay.com/api/?key=48951326-13eade97ce3647001e9a7dd68&q=gaming+pixel+art&image_type=photo&per_page=50")
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length > 0) {
          let randomImage = data.hits[Math.floor(Math.random() * data.hits.length)].webformatURL;
          document.getElementById("logo").src = randomImage;
        }
      })
      .catch((error) => console.error("Failed to fetch image:", error));
  }
  fetchRandomLogo();

 // Time Display
  function updateTime() {
    const timeZone = document.getElementById("time-selector").value;
    const now = new Date();
    let options = { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone };
    document.getElementById("time-display").textContent = new Intl.DateTimeFormat("en-US", options).format(now);
  }

  document.getElementById("time-selector").addEventListener("change", updateTime);
  setInterval(updateTime, 1000);
  updateTime();
});

  // Search Bar Fix
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
});
