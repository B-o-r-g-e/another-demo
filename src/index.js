const content = document.getElementById('content')

function navSection() {
    const nav = document.createElement('nav')

    const navContent = document.createElement('div')
    navContent.className = 'nav-content'

    const logo = document.createElement('h2')
    logo.textContent = `logo`

    const getStarted = document.createElement('button')
    getStarted.textContent = `get started`

    navContent.appendChild(logo)
    navContent.appendChild(getStarted)

    nav.appendChild(navContent)

    content.appendChild(nav)
}

function heroSection() {
    const heroFront = document.createElement('div')
    heroFront.className = 'hero-front'

    const wholeHeroContent = document.createElement('div')
    wholeHeroContent.className = 'whole-hero-content'


}

navSection()
heroSection()