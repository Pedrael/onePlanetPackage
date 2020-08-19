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

toggleVideo()
