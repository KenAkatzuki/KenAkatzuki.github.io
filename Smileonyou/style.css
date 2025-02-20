document.addEventListener("DOMContentLoaded", () => {
  function changeTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.add("hidden");
    });
    document.getElementById(tabId).classList.remove("hidden");
  }

  // Random login image selection
  const loginImages = [
    "https://via.placeholder.com/30?text=1",
    "https://via.placeholder.com/30?text=2",
    "https://via.placeholder.com/30?text=3"
  ];
  document.getElementById("login-img").src = loginImages[Math.floor(Math.random() * loginImages.length)];

  // Timezone display
  const timeDisplay = document.getElementById("time-display");
  const timezoneSelect = document.getElementById("timezone-select");

  function updateTime() {
    const timezone = timezoneSelect.value;
    const now = new Date();
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeDisplay.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
  }

  timezoneSelect.addEventListener("change", updateTime);
  setInterval(updateTime, 1000);
  updateTime(); // Initial call
});
