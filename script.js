// dyanimc copyright year date
const footerYear = document.getElementById("current-year");
footerYear.textContent = new Date().getFullYear();

// visual theme
const themeToggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme")

// check for previous user preference
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeToggleBtn.textContent = "☀️";
  }
}

themeToggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }
})




