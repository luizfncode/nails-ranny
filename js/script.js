/* =========================================================
   NAILS RANNY — script.js
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIGURAÇÃO — EDITAR AQUI
   --------------------------------------------------------- */

// Número de WhatsApp único, usado por TODOS os botões do site.
// Formato: código do país + DDD + número, sem espaços, traços ou "+".
const WHATSAPP_NUMBER = "5561999999999"; // <-- SUBSTITUIR pelo número real

// Link do Instagram, usado no botão da seção e no rodapé.
const INSTAGRAM_URL = "https://www.instagram.com/nail_sranny"; // <-- SUBSTITUIR se necessário

// Mensagens automáticas por contexto. A chave "geral" é usada nos
// botões genéricos de "Agendar". As demais são usadas nos botões
// de cada serviço específico.
const WHATSAPP_MESSAGES = {
  geral: "Olá! Vim pelo site da Nails Ranny e gostaria de agendar um horário.",
  alongamento: "Olá! Vim pelo site da Nails Ranny e gostaria de saber mais sobre alongamento.",
  manutencao: "Olá! Vim pelo site da Nails Ranny e gostaria de saber mais sobre manutenção.",
  nailart: "Olá! Vim pelo site da Nails Ranny e gostaria de saber mais sobre nail art.",
  esmaltacao: "Olá! Vim pelo site da Nails Ranny e gostaria de saber mais sobre esmaltação."
};

/* Serviços exibidos no carrossel. "tone" (1 a 4) controla a variação de
   degradê de cada card — pode repetir ou expandir a lista livremente.
   "image" é o caminho da foto real (opcional): se o arquivo não existir,
   o card mostra só o degradê "tone" normalmente — nada quebra. */
const SERVICES = [
  { number: "01", title: "Alongamento", description: "Unhas cuidadosamente estruturadas para um resultado elegante e duradouro.", msgKey: "alongamento", tone: 1, image: "images/servicos/alongamento.jpg" },
  { number: "02", title: "Manutenção", description: "Cuidados para manter suas unhas bonitas e impecáveis.", msgKey: "manutencao", tone: 2, image: "images/servicos/manutencao.jpg" },
  { number: "03", title: "Nail Art", description: "Detalhes personalizados para quem quer algo único.", msgKey: "nailart", tone: 3, image: "images/servicos/nailart.jpg" },
  { number: "04", title: "Esmaltação", description: "Acabamento delicado para complementar seu estilo.", msgKey: "esmaltacao", tone: 4, image: "images/servicos/esmaltacao.jpg" }
];

/* Itens do portfólio. Cada item usa um placeholder visual — basta
   trocar por uma tag <img> real quando as fotos forem enviadas.
   "tall" / "wide" controlam a proporção do card na galeria. */
/* Itens do portfólio. "image" é o caminho da foto real de cada trabalho —
   se o arquivo ainda não existir em /images/portfolio, o card mostra o
   placeholder normalmente (a <img> se remove sozinha via onerror). */
const PORTFOLIO_ITEMS = [
  {
    category: "alongamento",
    tag: "Alongamento",
    title: "Look 01",
    image: "images/portfolio/look-01.png"
  },
  {
    category: "nail-art",
    tag: "Nail Art",
    title: "Look 02",
    image: "images/portfolio/look-02.png"
  },
  {
    category: "francesinha",
    tag: "Francesinha",
    title: "Look 03",
    image: "images/portfolio/look-03.png"
  },
  {
    category: "nude",
    tag: "Nude",
    title: "Look 04",
    image: "images/portfolio/look-04.png"
  },
  {
    category: "decoradas",
    tag: "Decoradas",
    title: "Look 05",
    image: "images/portfolio/look-05.png"
  },
  {
    category: "nail-art",
    tag: "Nail Art",
    title: "Look 06",
    image: "images/portfolio/look-06.png"
  },
  {
    category: "alongamento",
    tag: "Alongamento",
    title: "Look 07",
    image: "images/portfolio/look-07.png"
  },
  {
    category: "francesinha",
    tag: "Francesinha",
    title: "Look 08",
    image: "images/portfolio/look-08.png"
  },
  {
    category: "nude",
    tag: "Nude",
    title: "Look 09",
    image: "images/portfolio/look-09.png"
  },
  {
    category: "decoradas",
    tag: "Decoradas",
    title: "Look 10",
    image: "images/portfolio/look-10.png"
  },
  {
    category: "nail-art",
    tag: "Nail Art",
    title: "Look 11",
    image: "images/portfolio/look-11.png"
  },
  {
    category: "alongamento",
    tag: "Alongamento",
    title: "Look 12",
    image: "images/portfolio/look-12.png"
  }
];

/* ---------------------------------------------------------
   2) WHATSAPP
   --------------------------------------------------------- */
function openWhatsapp(msgKey){
  const message = WHATSAPP_MESSAGES[msgKey] || WHATSAPP_MESSAGES.geral;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  el.addEventListener("click", () => {
    openWhatsapp(el.dataset.msgKey || "geral");
  });
});

/* Instagram — aplica o link único a todos os pontos de entrada */
document.querySelectorAll("#instagramLink, #footerInstagram").forEach((el) => {
  el.href = INSTAGRAM_URL;
});

/* ---------------------------------------------------------
   3) HEADER — estado ao rolar + menu mobile
   --------------------------------------------------------- */
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileNavBackdrop = document.getElementById("mobileNavBackdrop");
const mobileNavClose = document.getElementById("mobileNavClose");

// Estado guardado em variável própria (não depende de reler classes do DOM,
// evitando qualquer dessincronia entre os elementos).
let isMenuOpen = false;

function setMenu(open){
  isMenuOpen = open;
  menuToggle.classList.toggle("is-open", open);
  mobileNav.classList.toggle("is-open", open);
  if (mobileNavBackdrop) mobileNavBackdrop.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.style.overflow = open ? "hidden" : "";
}

function toggleMenu(forceClose){
  setMenu(forceClose ? false : !isMenuOpen);
}

menuToggle.addEventListener("click", () => toggleMenu());

// Botão "×" visível dentro do próprio painel do menu
if (mobileNavClose){
  mobileNavClose.addEventListener("click", () => toggleMenu(true));
}

// Fecha ao clicar em qualquer link do menu (inclusive se for a mesma âncora já ativa)
document.querySelectorAll("[data-nav]").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(true));
});

// Fecha ao tocar fora do menu (no fundo escurecido)
if (mobileNavBackdrop){
  mobileNavBackdrop.addEventListener("click", () => toggleMenu(true));
}

// Fecha também ao tocar no botão de WhatsApp que fica dentro do menu mobile
mobileNav.querySelectorAll("[data-whatsapp]").forEach((btn) => {
  btn.addEventListener("click", () => toggleMenu(true));
});

// Fecha com a tecla Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) toggleMenu(true);
});

// Fecha automaticamente se a tela for redimensionada para desktop com o menu aberto
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && isMenuOpen) toggleMenu(true);
});

/* ---------------------------------------------------------
   4) PORTFÓLIO — carrossel coverflow + filtros + lightbox
   --------------------------------------------------------- */
const portfolioTrack = document.getElementById("portfolioTrack");
const portfolioCounter = document.getElementById("portfolioCounter");
const portfolioPrevBtn = document.getElementById("portfolioPrev");
const portfolioNextBtn = document.getElementById("portfolioNext");
const portfolioCarouselEl = document.querySelector(".portfolio-carousel");

let portfolioItems = PORTFOLIO_ITEMS.slice(); // lista exibida no momento (respeita o filtro ativo)
let portfolioActiveIndex = 0;
let portfolioAutoplayTimer = null;
const PORTFOLIO_AUTOPLAY_MS = 2800;
const PORTFOLIO_STEP = 190; // distância horizontal entre cards vizinhos

// Distância "mais curta" entre dois índices num laço circular — usada pelos
// dois carrosséis do site (portfólio e serviços) para girar infinitamente.
function shortestDistance(index, active, length){
  let raw = (index - active) % length;
  if (raw > length / 2) raw -= length;
  if (raw < -length / 2) raw += length;
  return raw;
}

function buildPortfolioCarousel(items){
  portfolioItems = items;
  portfolioActiveIndex = 0;
  portfolioTrack.innerHTML = "";

  portfolioItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "portfolio-card";
    card.dataset.index = String(index);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver trabalho: ${item.title}`);

    card.innerHTML = `
      <div class="portfolio-card-inner">
        <div class="img-placeholder" style="height:100%;">
          <span class="ph-label" style="position:absolute; bottom:78px; left:22px;">
            Foto do trabalho<br><em>substituir pela imagem real</em>
          </span>
        </div>
        <img class="media-fill" src="${item.image}" alt="${item.title} — ${item.tag}" loading="lazy" onerror="this.remove()">
        <span class="portfolio-card-mark">NR</span>
        <div class="portfolio-card-caption">
          <span class="tag">${item.tag}</span>
          <span class="title">${item.title}</span>
        </div>
      </div>
    `;

    // Card ativo (central) abre o lightbox; card lateral apenas centraliza.
    card.addEventListener("click", () => {
      if (index === portfolioActiveIndex) openLightbox(index);
      else goToPortfolio(index);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        if (index === portfolioActiveIndex) openLightbox(index);
        else goToPortfolio(index);
      }
    });

    portfolioTrack.appendChild(card);
  });

  renderPortfolioCarousel();
  restartPortfolioAutoplay();
}

function renderPortfolioCarousel(){
  const cards = portfolioTrack.querySelectorAll(".portfolio-card");
  const total = portfolioItems.length;

  cards.forEach((card) => {
    const index = Number(card.dataset.index);
    const distance = shortestDistance(index, portfolioActiveIndex, total);
    const absDistance = Math.abs(distance);

    const scale = absDistance === 0 ? 1 : absDistance === 1 ? 0.8 : 0.64;
    const opacity = absDistance === 0 ? 1 : absDistance === 1 ? 0.5 : 0.2;
    const rotateY = distance === 0 ? 0 : distance > 0 ? -12 : 12;
    const translateX = distance * PORTFOLIO_STEP;

    card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
    card.style.opacity = String(opacity);
    card.style.zIndex = String(100 - absDistance);
    card.classList.toggle("is-active", absDistance === 0);
    card.setAttribute("aria-hidden", absDistance === 0 ? "false" : "true");
  });

  updatePortfolioCounter();
}

function updatePortfolioCounter(){
  const total = portfolioItems.length;
  const current = total ? portfolioActiveIndex + 1 : 0;
  const progress = total ? (current / total) * 100 : 0;
  portfolioCounter.innerHTML = `
    <span>${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span>
    <span class="bar" style="--progress:${progress}%"></span>
  `;
}

function goToPortfolio(index){
  const total = portfolioItems.length;
  if (!total) return;
  portfolioActiveIndex = ((index % total) + total) % total;
  renderPortfolioCarousel();
  restartPortfolioAutoplay();
}

function nextPortfolio(){ goToPortfolio(portfolioActiveIndex + 1); }
function prevPortfolio(){ goToPortfolio(portfolioActiveIndex - 1); }

function startPortfolioAutoplay(){
  stopPortfolioAutoplay();
  portfolioAutoplayTimer = setInterval(() => {
    const total = portfolioItems.length;
    if (!total) return;
    portfolioActiveIndex = (portfolioActiveIndex + 1) % total;
    renderPortfolioCarousel();
  }, PORTFOLIO_AUTOPLAY_MS);
}
function stopPortfolioAutoplay(){ if (portfolioAutoplayTimer) clearInterval(portfolioAutoplayTimer); }
function restartPortfolioAutoplay(){ stopPortfolioAutoplay(); startPortfolioAutoplay(); }

portfolioNextBtn.addEventListener("click", nextPortfolio);
portfolioPrevBtn.addEventListener("click", prevPortfolio);

// Pausa o autoplay enquanto o mouse está sobre o carrossel (desktop)
portfolioCarouselEl.addEventListener("mouseenter", stopPortfolioAutoplay);
portfolioCarouselEl.addEventListener("mouseleave", startPortfolioAutoplay);

// Arrastar/deslizar (touch e mouse) para trocar de trabalho manualmente
let portfolioDragStartX = null;
let portfolioDragDelta = 0;

function onPortfolioDragStart(x){
  portfolioDragStartX = x;
  portfolioDragDelta = 0;
  stopPortfolioAutoplay();
}
function onPortfolioDragMove(x){
  if (portfolioDragStartX === null) return;
  portfolioDragDelta = x - portfolioDragStartX;
}
function onPortfolioDragEnd(){
  if (portfolioDragStartX === null) return;
  const threshold = 40;
  if (portfolioDragDelta > threshold) prevPortfolio();
  else if (portfolioDragDelta < -threshold) nextPortfolio();
  else restartPortfolioAutoplay();
  portfolioDragStartX = null;
  portfolioDragDelta = 0;
}

portfolioTrack.addEventListener("touchstart", (e) => onPortfolioDragStart(e.touches[0].clientX), { passive: true });
portfolioTrack.addEventListener("touchmove", (e) => onPortfolioDragMove(e.touches[0].clientX), { passive: true });
portfolioTrack.addEventListener("touchend", onPortfolioDragEnd);

portfolioTrack.addEventListener("mousedown", (e) => onPortfolioDragStart(e.clientX));
window.addEventListener("mousemove", (e) => onPortfolioDragMove(e.clientX));
window.addEventListener("mouseup", onPortfolioDragEnd);

// Filtros — reconstroem o carrossel apenas com os itens da categoria escolhida
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const category = btn.dataset.filter;
    const filtered = category === "todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === category);
    buildPortfolioCarousel(filtered);
  });
});

/* ---------------------------------------------------------
   5) LIGHTBOX
   --------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
let currentIndex = 0;

function renderLightboxItem(index){
  const item = portfolioItems[index];
  lightboxContent.innerHTML = `
    <div class="media-slot">
      <div class="img-placeholder" style="height:100%;">
        <span class="ph-label">Foto do trabalho — ${item.title} (${item.tag})<br><em>substituir pela imagem real</em></span>
      </div>
      <img class="media-fill" src="${item.image}" alt="${item.title} — ${item.tag}" loading="eager" onerror="this.remove()">
    </div>
  `;
}

function openLightbox(index){
  currentIndex = index;
  renderLightboxItem(currentIndex);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showNext(step){
  currentIndex = (currentIndex + step + portfolioItems.length) % portfolioItems.length;
  renderLightboxItem(currentIndex);
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", () => showNext(1));
lightboxPrev.addEventListener("click", () => showNext(-1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext(1);
  if (e.key === "ArrowLeft") showNext(-1);
});

/* ---------------------------------------------------------
   6) CARROSSEL DE SERVIÇOS — estilo coverflow (autoplay + arrasto)
   --------------------------------------------------------- */
const servicesTrack = document.getElementById("servicesTrack");
const servicesDots = document.getElementById("servicesDots");
const servicesPrevBtn = document.getElementById("servicesPrev");
const servicesNextBtn = document.getElementById("servicesNext");

let servicesActiveIndex = 0;
let servicesAutoplayTimer = null;
const SERVICES_AUTOPLAY_MS = 3200;

// shortestDistance() já foi definida na seção 4 (Portfólio) e é reaproveitada aqui.

function buildServicesCarousel(){
  servicesTrack.innerHTML = "";
  servicesDots.innerHTML = "";

  SERVICES.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = `carousel-card tone-${service.tone}`;
    card.dataset.index = String(index);

    card.innerHTML = `
      <div class="carousel-card-inner">
        <img class="media-fill" src="${service.image}" alt="${service.title}" loading="lazy" onerror="this.remove()">
        <span class="carousel-card-number">${service.number}</span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <button class="carousel-card-cta" data-whatsapp data-msg-key="${service.msgKey}">Saber mais →</button>
      </div>
    `;

    // Clicar no corpo do card centraliza; o botão "Saber mais" abre o WhatsApp direto.
    card.addEventListener("click", () => goToService(index));
    card.querySelector("[data-whatsapp]").addEventListener("click", (e) => {
      e.stopPropagation();
    });

    servicesTrack.appendChild(card);

    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Ir para ${service.title}`);
    dot.addEventListener("click", () => goToService(index));
    servicesDots.appendChild(dot);
  });

  renderServicesCarousel();
}

function renderServicesCarousel(){
  const cards = servicesTrack.querySelectorAll(".carousel-card");
  const total = SERVICES.length;
  const step = 158; // distância horizontal entre cards vizinhos

  cards.forEach((card) => {
    const index = Number(card.dataset.index);
    const distance = shortestDistance(index, servicesActiveIndex, total);
    const absDistance = Math.abs(distance);

    const scale = absDistance === 0 ? 1 : absDistance === 1 ? 0.82 : 0.68;
    const opacity = absDistance === 0 ? 1 : absDistance === 1 ? 0.55 : 0.25;
    const rotateY = distance === 0 ? 0 : distance > 0 ? -10 : 10;
    const translateX = distance * step;

    card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
    card.style.opacity = String(opacity);
    card.style.zIndex = String(100 - absDistance);
    card.classList.toggle("is-active", absDistance === 0);
    card.setAttribute("aria-hidden", absDistance === 0 ? "false" : "true");
  });

  servicesDots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === servicesActiveIndex);
  });
}

function goToService(index){
  servicesActiveIndex = ((index % SERVICES.length) + SERVICES.length) % SERVICES.length;
  renderServicesCarousel();
  restartServicesAutoplay();
}

function nextService(){
  goToService(servicesActiveIndex + 1);
}

function prevService(){
  goToService(servicesActiveIndex - 1);
}

function startServicesAutoplay(){
  stopServicesAutoplay();
  servicesAutoplayTimer = setInterval(() => {
    servicesActiveIndex = (servicesActiveIndex + 1) % SERVICES.length;
    renderServicesCarousel();
  }, SERVICES_AUTOPLAY_MS);
}

function stopServicesAutoplay(){
  if (servicesAutoplayTimer) clearInterval(servicesAutoplayTimer);
}

function restartServicesAutoplay(){
  stopServicesAutoplay();
  startServicesAutoplay();
}

servicesNextBtn.addEventListener("click", nextService);
servicesPrevBtn.addEventListener("click", prevService);

// Pausa o autoplay enquanto o mouse está sobre o carrossel (desktop)
const servicesCarouselEl = document.querySelector(".services-carousel");
servicesCarouselEl.addEventListener("mouseenter", stopServicesAutoplay);
servicesCarouselEl.addEventListener("mouseleave", startServicesAutoplay);

// Arrastar/deslizar (touch e mouse) para trocar de serviço manualmente
let dragStartX = null;
let dragDelta = 0;

function onDragStart(x){
  dragStartX = x;
  dragDelta = 0;
  stopServicesAutoplay();
}
function onDragMove(x){
  if (dragStartX === null) return;
  dragDelta = x - dragStartX;
}
function onDragEnd(){
  if (dragStartX === null) return;
  const threshold = 40;
  if (dragDelta > threshold) prevService();
  else if (dragDelta < -threshold) nextService();
  else restartServicesAutoplay();
  dragStartX = null;
  dragDelta = 0;
}

servicesTrack.addEventListener("touchstart", (e) => onDragStart(e.touches[0].clientX), { passive: true });
servicesTrack.addEventListener("touchmove", (e) => onDragMove(e.touches[0].clientX), { passive: true });
servicesTrack.addEventListener("touchend", onDragEnd);

servicesTrack.addEventListener("mousedown", (e) => onDragStart(e.clientX));
window.addEventListener("mousemove", (e) => onDragMove(e.clientX));
window.addEventListener("mouseup", onDragEnd);

/* ---------------------------------------------------------
   7) REVEAL AO ROLAR
   --------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

/* ---------------------------------------------------------
   8) INTRO — tela de abertura
   --------------------------------------------------------- */
const siteIntro = document.getElementById("siteIntro");
const INTRO_HOLD_MS = 2200; // tempo que a tela de abertura fica visível
const INTRO_FADE_MS = 900;  // precisa bater com a transição de opacidade do .site-intro no CSS

if (siteIntro){
  document.body.classList.add("intro-active");

  const hideIntro = () => {
    siteIntro.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
    setTimeout(() => siteIntro.remove(), INTRO_FADE_MS);
  };

  // Em "prefers-reduced-motion" o CSS global já zera as animações da intro
  // (ela aparece e some quase instantaneamente) — aqui só garantimos que a
  // tela sempre se remove sozinha, sem depender de load de imagens.
  setTimeout(hideIntro, INTRO_HOLD_MS);
}

/* ---------------------------------------------------------
   9) INIT
   --------------------------------------------------------- */
buildPortfolioCarousel(PORTFOLIO_ITEMS);
buildServicesCarousel();
startServicesAutoplay();

const anoAtual = document.getElementById("anoAtual");
if (anoAtual) anoAtual.textContent = new Date().getFullYear();
