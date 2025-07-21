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
    name: "Tech Division",
    desc: "Leading in digital transformation, AI, and SaaS innovation.",
    link: "https://techdivision.example.com",
  },
  {
    name: "Infra & Energy",
    desc: "Driving growth in sustainable infrastructure and energy sectors.",
    link: "https://infraenergy.example.com",
  },
  {
    name: "Finance & Advisory",
    desc: "Smart investment solutions and strategic consulting for tomorrow.",
    link: "https://financeadvisory.example.com",
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
    <p class="mb-4">${item.desc}</p>
    <a href="${item.link}" target="_blank" class="company-button">Visit Site →</a>
  `;
  container.appendChild(panel);
});
