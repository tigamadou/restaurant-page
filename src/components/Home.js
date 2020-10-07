export default function Home() {
  const element = document.createElement('div');
  const title = document.createElement('h2');
  title.innerHTML = 'Welcome';

  const description = document.createElement('p');
  description.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';

  const description2 = document.createElement('p');
  description2.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';

  const description3 = document.createElement('p');
  description3.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';

  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(description2);
  element.appendChild(description3);

  return element;
}