//scrolljs
function isOut(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
}
var options = document.getElementsByClassName('fadeInID');
document.addEventListener('scroll', function() {
  for (let i = 0; i < options.length; i++) {
    var el = options[i];
    const rect = el.getBoundingClientRect();
    if(el.classList.contains("fadeInClass")  && (isOut(el))) {
      el.classList.remove("fadeInClass");
    }
    else if (!(el.classList.contains("fadeInClass"))){
      el.classList.add("fadeInClass");
    }
  }
});
function myFunction(){
  return;
}
