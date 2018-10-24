// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp
var section = document.getElementById('section');
var header = document.getElementById('section-header');
var accordion = document.getElementById('accordion');

//header.addEventListener('click', function () {
//  if (section.style.display === 'none') {
//    section.style.display = 'block';
//  }
//  else {
//    section.style.display = 'none';
//  }
//})

header.addEventListener('click', function () {
  this.classList.toggle('active');
  var content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
})
