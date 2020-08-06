//import anime from 'animejs/lib/anime.es.js'

function enableHeaderScroll(header, topclass, otherclass) {

  let headerItem = document.querySelector(header)

  document.addEventListener('DOMContentLoaded', function() {
    if(window.scrollY == 0) {
      headerItem.classList.add(topclass)
    }
    else {
      headerItem.classList.add(otherclass)
    }
  })
  document.addEventListener('scroll', function() {
    if(window.scrollY == 0) {
      headerItem.classList.add(topclass)
      headerItem.classList.remove(otherclass)
    }
    else {
      headerItem.classList.add(otherclass)
      headerItem.classList.remove(topclass)
    }
  })
}

enableHeaderScroll('header', 'trans', 'blue')




//
// anime({
//   targets: '.dollar2',
//   translateY: 50,
//   duration: 3000,
//   direction: 'alternate',
//   loop: true,
//   easing: 'easeOutQuint'
// })
//
// anime({
//   targets: '.dollar3',
//   translateY: 50,
//   duration: 7000,
//   direction: 'alternate',
//   loop: true,
//   easing: 'easeOutQuint'
// })
