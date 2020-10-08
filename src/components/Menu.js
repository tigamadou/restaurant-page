import Food1 from '../assets/images/food-1.jpg';
import Food2 from '../assets/images/food-2.jpg';
import Food3 from '../assets/images/food-3.jpg';
import Food4 from '../assets/images/food-4.jpg';
import Food5 from '../assets/images/food-5.jpg';
import Food6 from '../assets/images/food-6.jpg';

export default function Menu() {
  const element = document.createElement('div');
  const images = [Food1, Food2, Food3, Food4, Food5, Food6];

  const menus = document.createElement('ul');
  menus.className = 'menus';

  for (let i = 0; i < 6; i += 1) {
    const menu = document.createElement('li');
    menu.className = 'menu';
    const image = document.createElement('img');
    image.src = images[i];
    const price = document.createElement('div');
    price.className = 'price';
    price.innerHTML = `$${Math.round(Math.random() * 100)}`;
    const title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    menu.append(image, price, title);

    menus.appendChild(menu);
  }

  element.appendChild(menus);

  return element;
}