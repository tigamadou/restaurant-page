
export default class App{
    constructor(){
        this.activeMenu='Home'
        this.title = 'Micronaut\'s Restaurant'
        this.app = document.createElement('div')
        this.app.className='app'
        this.blurred = document.createElement('div')
        this.blurred.className = 'blurred'

        this.wrapper = document.createElement('div')
        this.wrapper.className = 'wrapper'

        this.pageContent = document.createElement('div')
        this.pageContent.className = 'page-content'

        this.renderHeader()

        this.container = document.createElement('div')
        this.container.className = 'container'

        this.renderMenu()
        
        this.content = document.createElement('div')
        this.content.className = 'content'

        this.container.appendChild(this.content)

        this.pageContent.appendChild(this.container)
        this.wrapper.appendChild(this.pageContent)
        
        this.app.appendChild(this.blurred)
        this.app.appendChild(this.wrapper)

    }

    renderHeader (){
        this.head = document.createElement('div')
        this.head.className = 'head'
        this.headBody = document.createElement('div')
        this.headBody.className = 'head-body'
        this.headBodyTitle = document.createElement('h1')
        this.headBodyTitle.innerHTML =this.title
        this.headBody.appendChild(this.headBodyTitle)
        this.head.appendChild(this.headBody)
        this.pageContent.appendChild(this.head)
    }

    renderMenu(){
        this.navElement1 = document.createElement('li')
        this.navElement1.className = 'nav-element'
        this.navElement1.innerHTML = 'Home'
        
        this.navElement2 = document.createElement('li')
        this.navElement2.className = 'nav-element'
        this.navElement2.innerHTML = 'Menu'

        this.navElement3 = document.createElement('li')
        this.navElement3.className = 'nav-element'
        this.navElement3.innerHTML = 'Contact'

        this.nav = document.createElement('ul')
        this.nav.className = 'nav'

        this.nav.appendChild(this.navElement1)
        this.nav.appendChild(this.navElement2)
        this.nav.appendChild(this.navElement3)

        this.tabs = document.createElement('div')
        this.tabs.className = 'tabs'
        this.tabs.appendChild(this.nav)       
        this.container.appendChild(this.tabs)
        
    }

    menu(){

        this.navElement1.classList.add('active');

        this.navElement1.addEventListener('click',() => {
            this.activeMenu='Home'
            this.navElement1.classList.add('active');
            this.navElement2.classList.remove('active');
            this.navElement3.classList.remove('active');

        })

        this.navElement2.addEventListener('click',() => {
            this.activeMenu='Menu'
            this.navElement1.classList.remove('active');
            this.navElement2.classList.add('active');
            this.navElement3.classList.remove('active');
        })

        this.navElement3.addEventListener('click',() => {
            this.activeMenu='Contact'
            this.navElement1.classList.remove('active');
            this.navElement2.classList.remove('active');
            this.navElement3.classList.add('active');
        })
    }
    render  () {
        this.menu()
        return this.app
    }
}