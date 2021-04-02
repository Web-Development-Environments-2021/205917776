const photoSlide = document.querySelector('.photo-slide');
const photoImg = document.querySelectorAll('.photo-slide img');


//Button
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

//Counter
let counter = 1;
const size = photoImg[0].clientWidth;

photoSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button Listeners

nextBtn.addEventListener('click', () => {
    if(counter >= photoImg.length -1) return;
    photoSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    photoSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    photoSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    photoSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

photoSlide.addEventListener('transitionend', () => {
    if (photoImg[counter].id === 'lastPhoto') {
        photoSlide.style.transition = "none";
        counter = photoImg.length - 2;
        photoSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (photoImg[counter].id === 'firstPhoto') {
        photoSlide.style.transition = "none";
        counter = photoImg.length - counter;
        photoSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
window.onload = Textarea
function Textarea(){
    tinymce.init({
        selector: "#mytextarea",
        plugins: "emoticons autoresize",
        toolbar: "emoticons",
        toolbar_location: "bottom",
        menubar: false,
        statusbar: false
        
      });
      let textarea = document.querySelector('.textare');
      textarea.addEventListener('keydown', autosize);
      function autosize() {
        let el = this;
        setTimeout(function () {
          el.style.cssText = 'height:auto; padding:0';
          // for box-sizing other than "content-box" use:
          // el.style.cssText = '-moz-box-sizing:content-box';
          el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
      }
}