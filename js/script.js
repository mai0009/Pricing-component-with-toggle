const switchMe = document.getElementById("switch");
const monthly = document.getElementsByClassName("monthly");
const yearly = document.getElementsByClassName("yearly");

switchMe.addEventListener("click", function () {
  for (const el of monthly) {
    if (el.classList.contains("hidden")) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  }
  for (const el of yearly) {
    if (el.classList.contains("hidden")) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  }
});
