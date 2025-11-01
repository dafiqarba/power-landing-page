// ========================================
// MOBILE MENU TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.header__menu-toggle')
  const nav = document.querySelector('.nav')
  const navLinks = document.querySelectorAll('.nav__link')
  const menuLines = document.querySelectorAll('.header__menu-line')

  menuToggle.addEventListener('click', function () {
    const isActive = nav.classList.toggle('nav--active')

    // Hamburger to X
    if (isActive) {
      menuLines[0].style.transform = 'rotate(45deg) translateY(1rem)'
      menuLines[1].style.opacity = '0'
      menuLines[2].style.transform = 'rotate(-45deg) translateY(-1rem)'
    } else {
      menuLines.forEach((line) => {
        line.style.transform = 'none'
        line.style.opacity = '1'
      })
    }
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--active')
      menuLines.forEach((line) => {
        line.style.transform = 'none'
        line.style.opacity = '1'
      })
    })
  })
})

// ========================================
// VIDEO MODAL
// ========================================

document.addEventListener('DOMContentLoaded', function () {
  const videoBtn = document.querySelector('.btn-video')
  const modal = document.querySelector('.modal')
  const modalClose = document.querySelector('.modal__close')
  const modalOverlay = document.querySelector('.modal__overlay')
  const modalIframe = document.querySelector('.modal__video iframe')

  videoBtn.addEventListener('click', function () {
    modal.classList.add('modal--active')
    document.body.style.overflow = 'hidden'
  })

  function closeModal() {
    modal.classList.remove('modal--active')
    document.body.style.overflow = 'auto'

    // Stop video by resetting iframe src
    const iframeSrc = modalIframe.getAttribute('src')
    modalIframe.setAttribute('src', '')
    modalIframe.setAttribute('src', iframeSrc)
  }

  modalClose.addEventListener('click', closeModal)

  modalOverlay.addEventListener('click', closeModal)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal()
    }
  })
})

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================

document.addEventListener('DOMContentLoaded', function () {
  const testimonialAvatars = document.querySelectorAll('.testimonials__avatar')
  const testimonialText = document.querySelector('.testimonials__text p')
  const testimonialName = document.querySelector('.testimonials__name')
  const testimonialRole = document.querySelector('.testimonials__role')

  const testimonials = [
    {
      text: 'Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is outstanding. They delivered beyond our expectations!',
      name: 'Sarah Johnson',
      role: 'CEO of Rezeki Makmur',
    },
    {
      text: 'The level of professionalism and expertise demonstrated by this team is unmatched. They transformed our vision into reality with remarkable precision and creativity.',
      name: 'Michael Chen',
      role: 'Product Manager at Maju Bersama',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      name: 'Ricky Aprilia',
      role: 'Founder of Varibo',
    },
    {
      text: 'Incredible work! They understood our needs perfectly and delivered a solution that exceeded all expectations. The communication throughout was excellent.',
      name: 'Emily Rodriguez',
      role: 'Marketing Director at Berkah Sukses',
    },
    {
      text: "A truly talented team that brings ideas to life. Their innovative approach and dedication to quality made all the difference in our project's success.",
      name: 'David Thompson',
      role: 'Founder of Rezeki Berkah',
    },
  ]

  testimonialAvatars.forEach((avatar, index) => {
    avatar.addEventListener('click', function () {
      testimonialAvatars.forEach((av) =>
        av.classList.remove('testimonials__avatar--active')
      )

      this.classList.add('testimonials__avatar--active')

      testimonialText.style.opacity = '0'
      testimonialName.style.opacity = '0'
      testimonialRole.style.opacity = '0'

      setTimeout(() => {
        testimonialText.textContent = testimonials[index].text
        testimonialName.textContent = testimonials[index].name
        testimonialRole.textContent = testimonials[index].role

        testimonialText.style.opacity = '1'
        testimonialName.style.opacity = '1'
        testimonialRole.style.opacity = '1'
      }, 300)
    })
  })
})
