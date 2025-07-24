// let arr=[20,30,5,80,9];

// let ans=arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(ans);

// let str="hello how are you";
// let ans=str.split("").map(
//     (ele)=>{
//         return ele.charAt(0).toUpperCase()+ele.slice(1);
//     }
// )
// console.log(ans.join(""));



const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}