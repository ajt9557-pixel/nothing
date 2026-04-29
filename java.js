const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const h1 = document.getElementById('h1');
const goToConverterBtn = document.getElementById('goToConverterBtn');

goToConverterBtn.addEventListener('click', goNext);

function goNext() {
  let name = nameInput.value.trim();

  if (name === "") {
    h1.textContent = "Please enter your name first!";
    return;
  }


  localStorage.setItem("name", name);

 
  window.location.href = "http://127.0.0.1:5500/index.html"; 
}