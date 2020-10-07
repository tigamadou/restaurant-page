export default function Contact() {
  const element = document.createElement('div');
  const title = document.createElement('h2');
  title.innerHTML = 'Contact';

  const description = document.createElement('p');
  description.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';

  element.appendChild(title);
  element.appendChild(description);

  return element;
}