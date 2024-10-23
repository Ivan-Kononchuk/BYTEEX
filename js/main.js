const images = [
  {
    src: "imgs/slider/1.jpg",
    caption: "1 Robe"
  },
  {
    src: "imgs/slider/2.jpg",
    caption: "2 Robe"
  },
  {
    src: "imgs/slider/3.jpg",
    caption: "3 Robe"
  },
  {
    src: "imgs/slider/4.jpg",
    caption: "4 Robe"
  },
  {
    src: "imgs/slider/5.jpg",
    caption: "5 Robe"
  },
  {
    src: "imgs/slider/6.jpg",
    caption: "6 Robe"
  },
  {
    src: "imgs/slider/7.jpg",
    caption: "7 Robe"
  },
  {
    src: "imgs/slider/8.jpg",
    caption: "8 Robe"
  }

  // Додай більше зображень
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const caption = document.getElementById('image-caption');
const thumbnails = document.querySelectorAll('.thumbnail');

function updateSlider(index) {
  currentIndex = index;
  mainImage.src = images[index].src;
  caption.textContent = images[index].caption;
  
  // Оновлюємо клас активності для мініатюр
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateSlider(newIndex);
});

document.querySelector('.next-btn').addEventListener('click', () => {
  const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateSlider(newIndex);
});

function changeImage(index) {
  updateSlider(index);
}
