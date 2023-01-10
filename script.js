const menu = document.querySelector('.menu')
const target = document.querySelectorAll('.target')
const wrapper = document.querySelectorAll('.wrapper')
const videos = document.querySelectorAll('.video')

menu.addEventListener('click', () => {
  target.forEach(item => {
    item.classList.toggle('change')
  });
})

// Making the menu closing when inside of a section is clicked.
wrapper.forEach(item => {
  item.addEventListener('click', () => {
    target.forEach(item => {
      item.classList.remove('change')
    })
  })
})

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play()
  })
  video.addEventListener('mouseout', () => {
    video.pause()
  })
})