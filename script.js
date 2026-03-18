
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
       
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("loaded"); 
        };
        obs.unobserve(img);
      }
    });
  },
  {
    threshold: 0.1,
  }
);


document.querySelectorAll("img.lazy").forEach((img) => {
  observer.observe(img);
});


document.getElementById("loadImages").addEventListener("click", () => {
  document.querySelectorAll("img.lazy").forEach((img) => {
    if (!img.src) {
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
    }
  });
});
