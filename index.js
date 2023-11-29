// DOM References
const html = document.querySelector("html");
const themeSwitchInputs = document.querySelectorAll('input[name="theme"');
const switchContainer = document.querySelector(".switch-container");

// Constants
const STORAGE_KEY_THEME = "theme";

function restoreThemeFromStorage() {
  const theme = localStorage.getItem(STORAGE_KEY_THEME) || "theme-1";
  themeSwitchInputs.forEach((input) => (input.checked = input.value === theme));
  changeTheme(theme);
}

function changeTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY_THEME, theme);
}

function onSwitchContainerClicked(event) {
  const perc = event.layerX / event.target.clientWidth;
  if (perc <= 0.33) changeTheme("theme-1");
  else if (perc <= 0.67) changeTheme("theme-2");
  else changeTheme("theme-3");
}

// Event Listeners
themeSwitchInputs.forEach((input) => {
  input.addEventListener("change", (event) => changeTheme(event.target.value));
});
switchContainer.addEventListener("click", onSwitchContainerClicked);

restoreThemeFromStorage();
