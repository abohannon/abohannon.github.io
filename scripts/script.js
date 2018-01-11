class App {
  constructor() {
    this.galleryTags = document.querySelectorAll('.tag')
    this.galleryItems = document.querySelectorAll('.gallery__item')
    this.introContainer = document.querySelector('.js-intro-container')
    this.nav = document.querySelector('.nav')
    this.name = document.querySelector('.js-name')
    this.icons = document.querySelector('.nav__icons')
  }

  renderSecondaryNav() {
    console.log('window inner', window.innerHeight)

    window.addEventListener('scroll', (e) => {
      let top = this.introContainer.getBoundingClientRect().top
      if (top < 0) {
        this.nav.classList.add('secondary-nav')
        this.icons.classList.add('white')
        this.name.classList.remove('hidden')
      } else {
        this.nav.classList.remove('secondary-nav')
        this.icons.classList.remove('white')
        this.name.classList.add('hidden')
      }
    })



  }

  renderGallery() {
    const toggleItem = (tag) => {
      this.galleryItems.forEach((item) => {
        if (!item.dataset.tags.includes(tag) && tag !== 'all') {
          item.classList.add('opacity')
          setTimeout(() => item.classList.add('hide'), 200)
        } else {
          item.classList.remove('hide', 'opacity')
        }
      })
    }

    this.galleryTags.forEach((tag) => {
      tag.addEventListener('click', (e) => {
        e.preventDefault()
        const tagValue = e.target.dataset.tags
        toggleItem(tagValue)
      })
    })
  }

  initialize() {
    this.renderGallery()
    this.renderSecondaryNav()
  }
}

const personalWebsite = new App()
personalWebsite.initialize()
