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

    const searchBox = document.createElement('div')
    searchBox.className = 'search-box'

    const form = document.createElement('form')
    form.innerHTML = `<form action="/search" method="GET">
                            <input type="text" id="searchInput" name="q" placeholder="what's your address">
                        </form>`

    searchBox.appendChild(form)
    searchPart.appendChild(searchLeftIcon)
    searchPart.appendChild(searchBox)

    heroRight.appendChild(heroRightH1)
    heroRight.appendChild(heroRightParagraph)
    heroRight.appendChild(searchPart)

    wholeHeroContent.appendChild(animation)
    wholeHeroContent.appendChild(heroRight)

    heroFront.appendChild(wholeHeroContent)

    content.appendChild(heroFront)

}

navSection()
heroSection()