        // Loungewear PICS SLIDER START
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

  // add more pics
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const caption = document.getElementById('image-caption');
const thumbnails = document.querySelectorAll('.thumbnail');

function updateSlider(index) {
  currentIndex = index;
  mainImage.src = images[index].src;
  caption.textContent = images[index].caption;
  
  // update class activity for pics
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
          // Loungewear PICS SLIDER END


          // COMMENTS SLIDER START
const prevComment = document.querySelector('.prev_comment');
const nextComment = document.querySelector('.next_comment');
const testimonials = document.querySelectorAll('.slider_card');
let commentIndex = 1;

function updateTestimonials() {
  testimonials.forEach((slider_card, index) => {
    slider_card.classList.remove('active');

    // adjucement element
    if (index === commentIndex) {
      slider_card.classList.add('active'); // middle comment
    }
  });

  // Moving slides for right view
  const offset = (commentIndex - 1) * -33.33;
  document.querySelector('.slider_container').style.transform = `translateX(${offset}%)`;
}

nextComment.addEventListener('click', () => {
  commentIndex = (commentIndex + 1) % testimonials.length;
  updateTestimonials();
});

prevComment.addEventListener('click', () => {
  commentIndex = (commentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonials();
});

// INITIAL STATE
updateTestimonials();
              // COMMENTS SLIDER END



              // FAQ SECTION START
// FAQ animations
const faqItems = document.querySelectorAll('.faq_question_container');

faqItems.forEach(item => {
  const question = item.querySelector('.faq_question');
  const answer = item.querySelector('.faq_answer');
  const faq_icon = item.querySelector('.faq_icon');

  question.addEventListener('click', () => {
    answer.classList.toggle('open');
    item.classList.toggle('faq_question_container_open');
    faq_icon.src = faq_icon.src.includes('close.png') ? 'imgs/faq/open.png' : 'imgs/faq/close.png';
  });
});
