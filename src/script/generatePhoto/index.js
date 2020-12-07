const generatePhoto = (resolution = {
  x: 1920,
  y: 1080,
}) => {
  const div = createElement('div', document.body);

  div.className = 'picsum-photo';

  const button = createElement('button', div);

  button.className = 'button picsum-photo__button';
  button.href = '';
  button.textContent = 'Generate';

  const image = createElement('img', div);

  fetchPhoto(resolution).then((url) => {
    image.src = url;
  });

  image.className = 'picsum-photo__img';

  button.addEventListener('click', () => {
    fetchPhoto(resolution).then((url) => {
      image.src = url;
    });
  });
};

function fetchPhoto({ x, y }) {
  // eslint-disable-next-line no-undef
  return fetch(`https://picsum.photos/${x}/${y}`)
    .then(response => response.url);
}

function createElement(tagName, parentElement) {
  const element = document.createElement(tagName);

  parentElement.append(element);

  return element;
}

export default generatePhoto;
