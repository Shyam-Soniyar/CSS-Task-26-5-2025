function themeChange() {
  const el = document.getElementById("root");
  if (el.className === "dark") {
    document.getElementById("root").className = "light";
    document.getElementById("theme").innerText = "Dark Mode";
  } else {
    document.getElementById("root").className = "dark";
    document.getElementById("theme").innerText = "Light Mode";
  }
}
function themeChange2() {
  const el = document.getElementById("root");
  if (el.className === "pink-mode") {
    document.getElementById("root").className = "light";
    document.getElementById("theme2").innerText = "Pink Mode";
  } else {
    document.getElementById("root").className = "pink-mode";
    document.getElementById("theme2").innerText = "Light Mode";
  }
}
function themeChange3() {
  const el = document.getElementById("root");
  if (el.className === "yellow-mode") {
    document.getElementById("root").className = "light";
    document.getElementById("theme3").innerText = "Yellow Mode";
  } else {
    document.getElementById("root").className = "yellow-mode";
    document.getElementById("theme3").innerText = "Light Mode";
  }
}
