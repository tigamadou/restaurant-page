import Food_1 from '../assets/images/food-1.jpg'
import Food_2 from '../assets/images/food-2.jpg'
import Food_3 from '../assets/images/food-3.jpg'
import Food_4 from '../assets/images/food-4.jpg'
import Food_5 from '../assets/images/food-5.jpg'
import Food_6 from '../assets/images/food-6.jpg'
export default function Menu(){
    let element = document.createElement('div')
    let images = [Food_1,Food_2,Food_3,Food_4,Food_5,Food_6]

    let menus = document.createElement('ul')
    menus.className='menus'

    for(var i=0;i<6;i+=1){
        var menu = document.createElement('li')
            menu.className = 'menu'
        var image = document.createElement('img')
            image.src = images[i]
        var price = document.createElement('div')
            price.className= 'price'
            price.innerHTML=`$${Math.round(Math.random()*100)}` 
        var title = document.createElement('div')
            title.className= 'title'
            title.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

            menu.appendChild(image)
            menu.appendChild(price)
            menu.appendChild(title)
            menus.appendChild(menu)
    }


    element.appendChild(menus)

    return element
   
}