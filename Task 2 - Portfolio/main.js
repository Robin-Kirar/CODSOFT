const nav = document.querySelector('[data-nav]')
const navBtn = document.querySelector('[data-nav-btn]')

navBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
})
