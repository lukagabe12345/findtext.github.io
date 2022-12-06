const placeholder = document.getElementById("length-p");
const input = document.getElementById("demo");

function getlength() {
  let text = input.value;
  var length = text.length;
  placeholder.textContent =  length;
}

