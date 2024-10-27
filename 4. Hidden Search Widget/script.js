const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus(); //focus shifts from button to input field
});

input.addEventListener("keydown", (event) => {
  if (input.value === "") {
    if (event.key === "Enter") {
      search.classList.toggle("active");
    }
  } else {
    if (event.key === "Enter") {
      alert("You have searched for =>  " + input.value);
      input.value = "";
      // search.classList.remove("active");
    }
  }
});
