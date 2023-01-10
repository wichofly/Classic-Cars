const menu = document.querySelector('.menu')
const target = document.querySelectorAll('.target')
const wrapper = document.querySelectorAll('.wrapper')

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