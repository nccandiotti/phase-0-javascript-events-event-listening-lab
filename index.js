const input = document.getElementById("input")

function addingEventListener() {
  alert("I was clicked!")
  input.addEventListener("click", addingEventListener)
}

// document.querySelector("#input")
// input.addEventListener("click", function () {
//   alert("I was clicked!")
// })
