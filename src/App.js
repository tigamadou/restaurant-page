
export default class App{
    constructor(){
        this.title = 'Micronaut\'s Restaurant'
        this.app = document.createElement('div')
        this.app.className='app'
        this.blurred = document.createElement('div')
        this.blurred.className = 'blurred'

        this.wrapper = document.createElement('div')
        this.wrapper.className = 'wrapper'

        this.pageContent = document.createElement('div')
        this.pageContent.className = 'page-content'

        this.head = document.createElement('div')
        this.head.className = 'head'

        this.headBody = document.createElement('div')
        this.headBody.className = 'head-body'

        this.headBodyTitle = document.createElement('h1')
        this.headBodyTitle.innerHTML =this.title

        this.headBody.appendChild(this.headBodyTitle)
        this.head.appendChild(this.headBody)

        this.pageContent.appendChild(this.head)
        
        this.wrapper.appendChild(this.pageContent)
        
        this.app.appendChild(this.blurred)
        this.app.appendChild(this.wrapper)

    }

    render  () {
        console.log(this.app)
        return this.app
    }
}