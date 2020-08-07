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

let a = (test) => {
  console.log(this, 'a')
}

let b = function(){
  console.log(this, 'b')
}

function c() {
  console.log(this, 'c')
}

const nigga = {
  name: 'J',
  a: function() {
    console.log(this)
  },
  b: () => {
    console.log(this)
  }
}

// nigga.a()
// nigga.b()

console.log(this)

window.setTimeout(function(){
  console.log(1, this)
}, 0)

window.setTimeout(()=>{
  console.log(2, this)
}, 0)

window.setTimeout(()=>{
  console.log(3)
}, 0)

// a('test')
// b()
// c()




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
