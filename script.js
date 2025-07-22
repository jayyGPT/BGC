AOS.init({
  duration: 800,
  once: true,
});

window.addEventListener("scroll", () => {
  const growCTA = document.querySelector(".grow-cta");
  const scrollY = window.scrollY;
  const scale = 1 + scrollY / 250;
  const opacity = 1 - scrollY / 500;

  growCTA.style.transform = `scale(${scale > 5 ? 5 : scale})`;
  growCTA.style.opacity = opacity > 0 ? opacity : 0;
});

const companies = [
  {
    name: "Software Development",
    desc: "Complete technical solutions — we build websites, apps, and systems for automation and ease.",
    points: [
      "Custom websites, mobile apps, and systems",
      "Focus on automation and operational efficiency",
      "End-to-end design, development, and support"
    ],
    link: "https://yourdomain.com/software-development",
  },
  {
    name: "Real Estate",
    desc: "Trusted partner for buying, selling, and clearing legal issues for land and properties.",
    points: [
      "Buy, sell, and manage land or properties",
      "Clear legal paperwork and verify titles",
      "Transparent, smooth transactions"
    ],
    link: "https://yourdomain.com/real-estate",
  },
];

const container = document.getElementById("companies-container");
companies.forEach((item, index) => {
  const panel = document.createElement("div");
  panel.className = "company-panel";
  panel.setAttribute("data-aos", "fade-up");
  panel.setAttribute("data-aos-delay", index * 100);
  panel.innerHTML = `
    <h4 class="text-xl font-heading mb-2">${item.name}</h4>
    <p class="mb-2">${item.desc}</p>
    <ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul>
    <a href="${item.link}" target="_blank" class="company-button">Visit Site →</a>
  `;
  container.appendChild(panel);
});

// Add Coming Soon Card
const comingSoon = document.createElement("div");
comingSoon.className = "company-panel coming-soon";
comingSoon.innerHTML = `<span>Exciting new divisions launching soon…</span>`;
container.appendChild(comingSoon);