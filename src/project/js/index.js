// function enableHeaderScroll(header, topclass, otherclass) {
//
//   let headerItem = document.querySelector(header)
//
//   document.addEventListener('DOMContentLoaded', function() {
//     if(window.scrollY == 0) {
//       headerItem.classList.add(topclass)
//     }
//     else {
//       headerItem.classList.add(otherclass)
//     }
//   })
//   document.addEventListener('scroll', function() {
//     if(window.scrollY == 0) {
//       headerItem.classList.add(topclass)
//       headerItem.classList.remove(otherclass)
//     }
//     else {
//       headerItem.classList.add(otherclass)
//       headerItem.classList.remove(topclass)
//     }
//   })
// }

//enableHeaderScroll('header', 'trans', 'blue')
// var scriptTag = document.createElement('script'), // create a script tag
// firstScriptTag = document.getElementsByTagName('script')[0]; // find the first script tag in the document
// scriptTag.src = 'https://www.youtube.com/iframe_api'; // set the source of the script to your script
// firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM

function toggleVideo() {

  let buttons = document.querySelectorAll('.play-button')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      event.preventDefault()
      let buttID = button.id.substring(3, 4)
      let video = document.getElementById('vid'+buttID)
      video.classList.toggle('none')
    })
  })

  let videos = document.querySelectorAll('.youtube-container')

  videos.forEach((video) => {
    video.addEventListener('click', (e) => {
      if(e.currentTarget == video) {
        let player = video.querySelector('iframe')
        player.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        video.classList.toggle('none')
      }
    })
  })
}

function toggleUl() {
  let list = document.querySelector('#list-of-checkboxes')
  if(list !== null) {
    let checkboxes = list.querySelectorAll('input')
    checkboxes.forEach((ch) => {
      ch.addEventListener('click', () => {
        ch.checked ? ch.parentNode.classList.add('checked') : ch.parentNode.classList.remove('checked')
      })
    })
    document.addEventListener('DOMContentLoaded', () => {
      checkboxes.forEach((ch) => {
          ch.checked ? ch.parentNode.classList.add('checked') : ch.parentNode.classList.remove('checked')
      })
    })
  }
}

function togglePopup() {
  let open = document.querySelectorAll('.js-open-popup')
  let popup = document.querySelector('.popup-message')
  let close = popup.querySelector('.js-close-popup')
  if(open != null) {
    open.forEach((i) => {
      i.addEventListener('click', (e) => {
        e.preventDefault()
        popup.style.display = 'flex'
      })
    })
  }

  if(close != null) {
    close.addEventListener('click', () => {
      popup.style.display = 'none'
    })
  }

  let switchItem = popup.querySelector('.switch')
  if(switchItem != null) switchItem.addEventListener('click', () => {
    let switches = switchItem.querySelectorAll('.switch-btn')
    switches.forEach((sw) => {
      sw.classList.toggle('switched')
    })
    popup.querySelector('.social-if').classList.toggle('disabled')
    popup.querySelector('.contact-if').classList.toggle('disabled')
  })
}

toggleVideo()
toggleUl()
togglePopup()
