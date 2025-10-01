const texts = ["HI! I'M SEFIA", "CREATIVE THINKER", "PROBLEM SOLVER"];
let i = 0, j = 0, isDeleting = false;
const el = document.getElementById('typing');

(function type() {
  const current = texts[i];
  el.textContent = isDeleting ? current.slice(0, j--) : current.slice(0, j++);

  let delay = isDeleting ? 50 : 150;
  if (!isDeleting && j === current.length) {
    isDeleting = true;
    delay = 1000;
  }
  if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    j = 0;
  }
  setTimeout(type, delay);
})();

$(document).ready(function(){
  $(".hero-text").hide().fadeIn(1500); 
});
