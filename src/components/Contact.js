export default function Contact(){
    let element = document.createElement('div')
    let title = document.createElement('h2')
    title.innerHTML = 'Contact'

    let description = document.createElement('p')
    description.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.'

    element.appendChild(title)
    element.appendChild(description)

    return element
   
}