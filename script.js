// Створюємо IntersectionObserver для відстеження видимості зображень
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Завантажуємо зображення, коли воно стає видимим
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("loaded"); // додаємо клас для анімації
        };
        obs.unobserve(img); // припиняємо спостереження
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Застосовуємо Observer до всіх зображень з data-src
document.querySelectorAll("img.lazy").forEach((img) => {
  observer.observe(img);
});

// Додатково: завантаження зображень вручну при натисканні кнопки
document.getElementById("loadImages").addEventListener("click", () => {
  document.querySelectorAll("img.lazy").forEach((img) => {
    if (!img.src) {
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
    }
  });
});
