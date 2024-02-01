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

    const animation = document.createElement('div')
    animation.className = 'animation'
    animation.innerHTML = `<img src="../assets/food.png" alt="">`

    const heroRight = document.createElement('div')
    heroRight.className = 'hero-right'

    const heroRightH1 = document.createElement('h1')
    heroRightH1.textContent = `Food delivery and more`

    const heroRightParagraph = document.createElement('p')
    heroRightParagraph.textContent = `Groceries, shops, pharmacies, anything!`

    const searchPart = document.createElement('div')
    searchPart.className = 'search-part'

    const searchLeftIcon = document.createElement('div')
    searchLeftIcon.className = 'search-left-icon'
    searchLeftIcon.innerHTML = `<img src="https://glovoapp.com/images/icons/flag--white.svg" alt="">`


}

navSection()
heroSection()