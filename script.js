// dyanimc copyright year date
const footerYear = document.getElementById("current-year");
footerYear.textContent = new Date().getFullYear();

// visual theme
const themeToggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme")

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (currentTheme === "dark" || (!currentTheme && prefersDarkTheme)) {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggleBtn.textContent = "☀️";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  themeToggleBtn.textContent = "🌙";
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
