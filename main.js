const WA  = "554598606618";
const MSG = "Olá! Vim pelo site e quero saber mais sobre a Prókorpus";

const IMAGENS = {
  logo:       "assets/logos/korpus.png",
  logoLoader: "assets/logos/korpus2.png",
  logoClaro:  "assets/logos/korpus2.png",
  instagram:  "assets/logos/insta.png",
  tiktok:     "assets/logos/tik.png",
  facebook:   "assets/logos/face.png",
  whatsapp:   "assets/logos/zap.png",
  appstore:   "assets/logos/apps.png",
  googleplay: "assets/logos/play.png",

  hero:       "assets/hero.jpg",
  sobre1:     "assets/academia/musculacao.png",

  musculacao: "assets/modalidades/musculacao.jpeg",
  funcional:  "assets/modalidades/funcional.jpeg",
  fight:      "assets/modalidades/fight.jpeg",
  kids:       "assets/modalidades/kids.jpg",
  app:        "assets/academia/mobile.png",

  sfLogo:     "assets/logos/coffee.png",
  sfEspaco:   "assets/academia/gym.jpg",

  avaliacao: [
    "assets/avaliacao/1.png",
    "assets/avaliacao/8.png",
    "assets/avaliacao/9.png",
    "assets/avaliacao/7.png",
    "assets/avaliacao/2.png",
    "assets/avaliacao/10.webp",
    "assets/avaliacao/1.png",
    "assets/avaliacao/8.png",
    "assets/avaliacao/7.png",
    "assets/avaliacao/9.png",
    "assets/avaliacao/10.webp",
  ],

  avaliacaoClaro: [
    "assets/avaliacao/2.png",
    "assets/avaliacao/7.png",
    "assets/avaliacao/8.png",
    "assets/avaliacao/9.png",
  ],

  camisas: [
    "assets/camisa/1.jpg",
    "assets/camisa/2.jpg",
    "assets/camisa/3.jpg",
    "assets/camisa/4.jpg",
    "assets/camisa/5.jpg",
  ],
};

const MODALIDADES = [
  ["Musculação", "Força, hipertrofia e saúde com equipamentos completos e orientação profissional em cada treino.", IMAGENS.musculacao, '<svg class="ic"><use href="#i-dumbbell"/></svg>'],
  ["Funcional", "Treino dinâmico para condicionamento, mobilidade e queima calórica, em turmas animadas.", IMAGENS.funcional, '<svg class="ic"><use href="#i-bolt"/></svg>'],
  ["Funcional Fight", "Movimentos de luta combinados ao funcional, trazendo energia, disposição e muito condicionamento.", IMAGENS.fight, '<svg class="ic"><use href="#i-target"/></svg>'],
  ["Funcional Kids", "Atividade física divertida e segura para crianças. Terças e quintas, das 15h às 16h.", IMAGENS.kids, '<svg class="ic"><use href="#i-smile"/></svg>'],
];

const PLANOS = [
  ["Diária", "R$20,00", "por dia", "Treine sem compromisso, quando quiser.", ["Musculação e treino funcional", "Aplicativo de treino SCA Fit", "Acompanhamento profissional"]],
  ["Mensal", "R$110,00", "por mês", "Acesso livre à academia todos os dias do mês.", ["Musculação e treino funcional", "Aplicativo de treino SCA Fit", "Acompanhamento profissional", "Sem taxa de matrícula"], "Mais escolhido", true],
  ["Quadrimestral", "R$392,08", "4 meses", "Quatro meses de treino com avaliação física inclusa.", ["Tudo do plano mensal", "Avaliação física completa", "Economia em relação ao mensal"], null, false, "R$98,02"],
  ["Semestral", "R$556,73", "6 meses", "Seis meses para consolidar a sua rotina de treino.", ["Tudo do plano mensal", "Avaliação física completa", "Melhor custo por mês"], null, false, "R$92,79"],
  ["Anual", "R$999,90", "por ano", "O ano inteiro de treino pelo melhor valor.", ["Tudo do plano semestral", "Avaliação física completa", "Benefícios exclusivos para alunos anuais"], "Melhor custo-benefício", false, "R$83,33"],
  ["Avaliação Física", "R$20,00", "por avaliação", "Entenda sua condição atual e evolua com segurança.", ["Análise de composição corporal", "Orientação de treino personalizada", "Resultado na recepção ou pelo aplicativo"], "Avulsa"],
];

const AVALIACOES = [
  ["Nilse Ferreira", "8 avaliações · 3 fotos · um ano atrás", "Ótimo ambiente nessa academia e centro de reabilitação com excelentes profissionais, valores acessíveis e muitos equipamentos necessários. Local e pessoas acolhedoras que proporcionam conforto e qualidade de vida."],
  ["Rosane Souza Macedo", "1 avaliação · 2 anos atrás", "Experiência muito boa pra quem quiser fazer um bom treino."],
  ["Vinicius Veiga", "1 avaliação · 4 anos atrás", "Boa academia, tem o necessário para bons treinos, atendimento muito bom, e local agradável."],
];

const DIAS     = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const ABERTURA = ["Fechado", "06:00 – 22:00", "06:00 – 22:00", "06:00 – 22:00", "06:00 – 22:00", "06:00 – 22:00", "08:00 – 12:00 · 14:00 – 18:00"];

const faixas = (d) => (d > 0 && d < 6 ? [[360, 1320]] : d === 6 ? [[480, 720], [840, 1080]] : []);

const AULAS = [
  ["Funcional matutino",     "Seg, Qua e Sex · 06h – 07h",                  "1,3,5"],
  ["Funcional noturno",      "Seg, Ter e Qui · 18h – 19h · 19h10 – 20h10",  "1,2,4"],
  ["Personal Fight Boxing",  "Ter e Qui · 06h – 07h",                       "2,4"],
  ["Personal Fight Boxing",  "Seg e Qua · 20h15 – 21h15",                   "1,3"],
  ["Funcional Kids",         "Ter e Qui · 15h – 16h",                       "2,4"],
];

const CARROSSEL_MS = 4500;

const LOADER = { tempoMin: 3000 };

const FUNDACAO_ANO = 2015;
const FUNDACAO_MES = 7;
const FUNDACAO_DIA = 25;

(() => {
  const el = document.getElementById("loader");
  if (!el) return;

  const cv    = document.getElementById("ld-cv");
  const ctx   = cv.getContext("2d");
  const logo  = el.querySelector(".ld-logo");
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tempoMin = reduz ? 600 : LOADER.tempoMin;

  document.body.classList.add("is-loading");

  logo.onload  = () => logo.classList.add("on");
  let triedFallback = false;
  logo.onerror = () => {
    if (!triedFallback && IMAGENS.logoLoader && IMAGENS.logo !== IMAGENS.logoLoader) {
      triedFallback = true;
      logo.src = IMAGENS.logo;
      return;
    }
    const t = document.createElement("span");
    t.className = "ld-txt";
    t.textContent = "Prókorpus";
    logo.replaceWith(t);
  };
  logo.src = IMAGENS.logoLoader || IMAGENS.logo;

  const ONDAS = [
    { cor: "#2b2b2b", amp: 1.0, freq: 1.3, vel:  0.9, fase: 0 },
    { cor: "#8f8f8f", amp: 0.8, freq: 1.8, vel: -1.2, fase: 2 },
    { cor: "#ffffff", amp: 0.6, freq: 2.4, vel:  1.6, fase: 4 },
  ];
  let W = 0, H = 0;

  const medir = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const desenhar = (t, p) => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);
    const amp = Math.min(Math.max(H * 0.035, 18), 42);
    const y0  = (H + amp * 4) * (1 - p) - amp * 3;

    ONDAS.forEach((o, i) => {
      const yBase = y0 - (ONDAS.length - 1 - i) * amp * 0.7;
      ctx.fillStyle = o.cor;
      ctx.beginPath();
      ctx.moveTo(0, H + 2);
      for (let x = 0; x <= W + 8; x += 8) {
        const k = (x / W) * Math.PI * 2;
        const y = yBase
          + Math.sin(k * o.freq + t * o.vel + o.fase) * amp * o.amp
          + Math.sin(k * o.freq * 2.1 - t * o.vel * 0.7) * amp * o.amp * 0.25;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W + 8, H + 2);
      ctx.closePath();
      ctx.fill();
    });
  };

  medir();
  window.addEventListener("resize", medir);

  const t0 = performance.now();
  let carregou = document.readyState === "complete";
  let saindo = false, raf = 0, mostrado = 0;
  window.addEventListener("load", () => (carregou = true));
  setTimeout(() => (carregou = true), 8000);

  const sair = () => {
    saindo = true;
    el.classList.add("out");
    setTimeout(() => document.body.classList.remove("is-loading"), 450);
    setTimeout(() => { cancelAnimationFrame(raf); el.remove(); }, 1100);
  };

  const quadro = (agora) => {
    const decorrido = agora - t0;
    const porTempo  = Math.min(decorrido / tempoMin, 1) * 100;
    const alvo      = carregou ? porTempo : Math.min(porTempo, 92);
    mostrado += (alvo - mostrado) * 0.1;

    if (!reduz) desenhar(decorrido / 1000, saindo ? 1 : mostrado / 100);

    if (!saindo && carregou && decorrido >= tempoMin && mostrado > 99.2) sair();
    if (!saindo || el.isConnected) raf = requestAnimationFrame(quadro);
  };
  raf = requestAnimationFrame(quadro);
})();

const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const img = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`;
const wa  = (t) => `data-wa="${t}"`;

$$("img[data-img]").forEach((i) => (i.src = IMAGENS[i.dataset.img]));

$("#mod").innerHTML = MODALIDADES.map(([n, t, i, e]) =>
  `<div class="card reveal-child" data-m="${n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-")}"><div class="im">${img(i, n)}</div><h3>${n}</h3><p>${t}</p></div>`).join("");

$("#pl").innerHTML = PLANOS.map(([n, p, u, d, it, tag, hot, eq]) =>
  `<div class="card pn${hot ? " hot" : ""} reveal-child">${tag ? `<span class="tg">${tag}</span>` : ""}<h3>${n}</h3>
  <div class="pr">${p}<small>${u}</small></div>${eq ? `<span class="eq">equivale a ${eq} por mês</span>` : ""}<p>${d}</p><ul>${it.map((x) => `<li>${x}</li>`).join("")}</ul>
  <a class="btn g" ${wa(`Olá! Quero o plano ${n} da Prókorpus`)}><svg width="18" height="18"><use href="#wa"/></svg>Quero este plano</a></div>`).join("");

$("#cm").innerHTML = IMAGENS.camisas.map((s, n) =>
  `<div class="ph reveal-child" tabindex="0" role="button" aria-label="Ampliar camisa ${n + 1}">${img(s, `Camisa oficial Prókorpus, modelo ${n + 1}`)}</div>`).join("");

$("#rv").innerHTML = AVALIACOES.map(([n, m, t]) =>
  `<div class="card rv reveal-child"><span class="q">"</span><q>${t}</q><footer><b>${n}</b><small>${m}</small></footer></div>`).join("");

const agora = new Date();
const dia   = agora.getDay();
const min   = agora.getHours() * 60 + agora.getMinutes();
const faixaAtual = faixas(dia).find(([a, b]) => min >= a && min < b);
const aberto = !!faixaAtual;

const hm = (m) => `${Math.floor(m / 60)}h${m % 60 ? String(m % 60).padStart(2, "0") : ""}`;
const nomeDia = (d) => DIAS[d].split("-")[0].toLowerCase();

const proximaAbertura = () => {
  for (let o = 0; o <= 7; o++) {
    const d = (dia + o) % 7;
    const f = faixas(d).find(([a]) => o > 0 || a > min);
    if (f) return `${o === 0 ? "hoje" : o === 1 ? "amanhã" : nomeDia(d)} às ${hm(f[0])}`;
  }
  return "";
};

$("#ac").innerHTML = [1, 2, 3, 4, 5, 6, 0].map((d) =>
  `<div class="row${d === dia ? " hoje" : ""}"><b>${DIAS[d]}</b><span>${ABERTURA[d]}</span></div>`).join("");

$("#au").innerHTML = AULAS.map(([n, h, ds]) =>
  `<div class="row aula${ds.split(",").includes(String(dia)) ? " hoje" : ""}"><b>${n}</b><span>${h}</span></div>`).join("");

const bd = $("#bd");
bd.textContent = aberto ? "Aberto agora" : "Fechado";
bd.classList.toggle("off", !aberto);

$("#hj").textContent = `Hoje é ${nomeDia(dia)}. ` +
  (aberto
    ? `A academia está aberta e fecha às ${hm(faixaAtual[1])} — venha treinar!`
    : `A academia está fechada no momento. Abre ${proximaAbertura()}.`);

const jaFezAniversario = agora >= new Date(agora.getFullYear(), FUNDACAO_MES, FUNDACAO_DIA);
const anosDeHistoria = agora.getFullYear() - FUNDACAO_ANO - (jaFezAniversario ? 0 : 1);
$$(".anos").forEach((e) => (e.textContent = anosDeHistoria));
$("#ano").textContent = agora.getFullYear();

$$("[data-wa]").forEach((a) => {
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent(a.dataset.wa || MSG)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

const nav = $("#nav"), mb = $("#mb"), more = $(".more"), mo = $("#mo");

mb.addEventListener("click", () => mb.setAttribute("aria-expanded", nav.classList.toggle("on")));
mo.addEventListener("click", () => mo.setAttribute("aria-expanded", more.classList.toggle("on")));

const fecharMenus = () => {
  nav.classList.remove("on");
  more.classList.remove("on");
  mb.setAttribute("aria-expanded", "false");
  mo.setAttribute("aria-expanded", "false");
};
$$("nav a").forEach((a) => a.addEventListener("click", fecharMenus));
document.addEventListener("click", (e) => { if (!e.target.closest("header")) fecharMenus(); });

const linksMenu = [...$$("nav a[href^='#']")];
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) linksMenu.forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
linksMenu.forEach((a) => { const s = $(a.getAttribute("href")); if (s) spy.observe(s); });

const lb = $("#lb"), lbImg = lb.querySelector("img");
let lista = [], pos = 0, voltarPara = null;

const ver = (p) => {
  pos = (p + lista.length) % lista.length;
  const i = lista[pos].querySelector("img");
  lbImg.src = i.src;
  lbImg.alt = i.alt;
};

const abrirLb = (grupo, el) => {
  lista = grupo.filter((f) => f.querySelector("img"));
  if (!lista.length) return;
  voltarPara = el;
  ver(lista.indexOf(el));
  lb.classList.add("on");
  document.body.style.overflow = "hidden";
  lb.querySelector(".lbx").focus();
};

const fecharLb = () => {
  if (!lb.classList.contains("on")) return;
  lb.classList.remove("on");
  document.body.style.overflow = "";
  if (voltarPara) voltarPara.focus();
};

["#cm"].forEach((sel) => {
  const grupo = [...$$(sel + " .ph")];
  grupo.forEach((f) => {
    const abrir = (e) => {
      if (e.type === "click" || e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirLb(grupo, f); }
    };
    f.addEventListener("click", abrir);
    f.addEventListener("keydown", abrir);
  });
});

lb.addEventListener("click", (e) => {
  if (e.target.closest(".prev")) ver(pos - 1);
  else if (e.target.closest(".next")) ver(pos + 1);
  else fecharLb();
});

document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("on")) { if (e.key === "Escape") fecharMenus(); return; }
  if (e.key === "Escape") fecharLb();
  if (e.key === "ArrowLeft") ver(pos - 1);
  if (e.key === "ArrowRight") ver(pos + 1);
});

let toqueX = 0;
lb.addEventListener("touchstart", (e) => (toqueX = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 50) ver(dx > 0 ? pos - 1 : pos + 1);
}, { passive: true });

const tpl = $("#tl");
$$("img.brand,img[data-t]").forEach((i) => {
  const troca = () => i.replaceWith(i.classList.contains("brand") ? tpl.content.cloneNode(true) : i.dataset.t);
  i.addEventListener("error", troca);
  if (i.complete && !i.naturalWidth) troca();
});

(() => {
  const raiz = $("#av");
  if (!raiz) return;

  const palco  = raiz.querySelector(".av-stage");
  const pontos = raiz.querySelector(".av-dots");

  let slides = [], atual = 0, timer = null, pausado = false, naTela = true;

  const montarPontos = () => {
    pontos.innerHTML = "";
    slides.forEach((_, n) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "av-dot";
      b.setAttribute("aria-label", `Ir para a imagem ${n + 1}`);
      b.addEventListener("click", () => { ir(n); iniciar(); });
      pontos.appendChild(b);
    });
    raiz.classList.toggle("um", slides.length < 2);
  };

  const ir = (n) => {
    if (!slides.length) return;
    atual = (n + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle("on", i === atual);
      s.setAttribute("aria-hidden", i === atual ? "false" : "true");
    });
    [...pontos.children].forEach((d, i) => {
      d.classList.toggle("on", i === atual);
      d.setAttribute("aria-current", i === atual ? "true" : "false");
    });
  };

  const parar = () => { clearInterval(timer); timer = null; };
  const iniciar = () => {
    parar();
    if (slides.length > 1 && !document.hidden)
      timer = setInterval(() => ir(atual + 1), CARROSSEL_MS);
  };

  const descartar = (im) => {
    slides = slides.filter((s) => s !== im);
    im.remove();
    if (!slides.length) { raiz.remove(); return; }
    montarPontos();
    ir(Math.min(atual, slides.length - 1));
    iniciar();
  };

  const EXTS = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG", "WEBP"];
  const variantes = (src) => {
    const base = src.replace(/\.[^./]+$/, "");
    return [src, ...EXTS.map((e) => `${base}.${e}`).filter((v) => v !== src)];
  };

  const listaDoTema = () =>
    document.documentElement.getAttribute("data-theme") === "light" && (IMAGENS.avaliacaoClaro || []).length
      ? IMAGENS.avaliacaoClaro
      : (IMAGENS.avaliacao || []);

  const carregar = () => {
    parar();
    palco.innerHTML = "";
    palco.style.removeProperty("--av-ratio");
    atual = 0;
    slides = listaDoTema().map((src, n) => {
      const im = document.createElement("img");
      const tentativas = variantes(src);
      let t = 0;
      im.addEventListener("error", () => {
        if (++t < tentativas.length) { im.src = tentativas[t]; return; }
        console.warn("[Carrossel] imagem não encontrada:", src);
        descartar(im);
      });

      im.addEventListener("load", () => {
        if (n === 0 && im.naturalWidth && im.naturalHeight) {
          const r = Math.min(1.5, Math.max(0.65, im.naturalWidth / im.naturalHeight));
          palco.style.setProperty("--av-ratio", r.toFixed(3));
        }
      });
      im.alt = `Avaliação física, imagem ${n + 1}`;
      im.loading = "eager";
      im.decoding = "async";
      im.src = src;
      palco.appendChild(im);
      return im;
    });

    if (!slides.length) { raiz.remove(); return; }
    montarPontos();
    ir(0);
    iniciar();
  };
  carregar();
  if (!raiz.isConnected) return;
  document.addEventListener("pk-tema", carregar);

  raiz.querySelector(".prev").addEventListener("click", () => { ir(atual - 1); iniciar(); });
  raiz.querySelector(".next").addEventListener("click", () => { ir(atual + 1); iniciar(); });

  raiz.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  { ir(atual - 1); iniciar(); }
    if (e.key === "ArrowRight") { ir(atual + 1); iniciar(); }
  });

  let x0 = 0;
  palco.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  palco.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { ir(dx > 0 ? atual - 1 : atual + 1); iniciar(); }
  }, { passive: true });

  document.addEventListener("visibilitychange", iniciar);
  iniciar();
})();

const addReveal = () => {
  $$(".s > .wrap > .eye, .s > .wrap > h2, .s > .wrap > .sub2, .s > .wrap > .two, .s > .wrap > .rh, .s > .wrap > .grid, .s > .wrap > .big, .hero .hg > div, .bar, .cta").forEach((el) => {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
  });
};
addReveal();

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("vis");

      const children = entry.target.querySelectorAll(".reveal-child:not(.vis)");
      children.forEach((child, i) => {
        setTimeout(() => child.classList.add("vis"), i * 100);
      });

      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

$$(".reveal").forEach((el) => revealObs.observe(el));

const childObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const parent = entry.target.closest(".grid, .two, .sg");
      if (parent) {
        const siblings = [...parent.querySelectorAll(".reveal-child:not(.vis)")];
        siblings.forEach((s, i) => {
          setTimeout(() => s.classList.add("vis"), i * 100);
        });
        siblings.forEach((s) => childObs.unobserve(s));
      } else {
        entry.target.classList.add("vis");
      }
      childObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

$$(".reveal-child").forEach((el) => childObs.observe(el));

const header = $("header");
let lastScroll = 0;
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 20);
  lastScroll = y;
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true");
document.body.prepend(progressBar);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + "%";
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const backTop = document.createElement("button");
backTop.className = "back-top";
backTop.setAttribute("aria-label", "Voltar ao topo");
backTop.innerHTML = "↑";
document.body.appendChild(backTop);

const toggleBackTop = () => {
  backTop.classList.toggle("show", window.scrollY > 600);
};
window.addEventListener("scroll", toggleBackTop, { passive: true });
toggleBackTop();

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const animateCounter = (el, target, suffix = "") => {
  const duration = 1500;
  const start = performance.now();
  const from = 0;

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.round(from + (target - from) * ease);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent.trim();
      const match = text.match(/^(\d+)(\+?)$/);
      if (match) {
        const num = parseInt(match[1], 10);
        const suffix = match[2] || "";
        animateCounter(el, num, suffix);
      }
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

$$(".stats b").forEach((el) => counterObs.observe(el));

$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = $(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });

      history.pushState(null, "", a.getAttribute("href"));
    }
  });
});

lb.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusable = lb.querySelectorAll("button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

const ICONES_COR = {
  "i-pin":      ["#ff4d4d", "bounce"],
  "i-ticket":   ["#ffb020", "wiggle"],
  "i-clock":    ["#38bdf8", "pulse"],
  "i-clip":     ["#a78bfa", "wiggle"],
  "i-phone":    ["#22d3ee", "shake"],
  "i-pulse":    ["#ff3b6b", "beat"],
  "i-shirt":    ["#f472b6", "sway"],
  "i-grad":     ["#facc15", "bob"],
  "i-snow":     ["#7dd3fc", "spin"],
  "i-access":   ["#60a5fa", "pulse"],
  "i-coffee":   ["#fb923c", "bob"],
  "i-card":     ["#4ade80", "wiggle"],
  "i-dumbbell": ["#ef4444", "lift"],
  "i-bolt":     ["#fde047", "flash"],
  "i-target":   ["#f97316", "pulse"],
  "i-smile":    ["#fbbf24", "bounce"],
  "i-bite":     ["#f59e0b", "wiggle"],
  "i-cup":      ["#06b6d4", "bob"],
  "i-bottle":   ["#34d399", "sway"],
  "i-leaf":     ["#4ade80", "sway"],
};

(() => {
  let n = 0;
  $$("svg.ic").forEach((svg) => {
    if (svg.closest(".btn")) return;
    const use = svg.querySelector("use");
    const cfg = use && ICONES_COR[(use.getAttribute("href") || "").replace("#", "")];
    if (!cfg) return;

    svg.dataset.a = cfg[1];
    svg.style.setProperty("--ic", cfg[0]);
    svg.style.animationDelay = `${-(n++ % 9) * 0.37}s`;

    const caixa = svg.parentElement;
    if (caixa && caixa.tagName === "I") {
      caixa.classList.add("ic-box");
      caixa.style.setProperty("--ic", cfg[0]);
    }
  });
})();

(() => {
  const btn  = document.getElementById("tema");
  if (!btn) return;
  const raiz = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');

  const aplicar = (tema) => {
    raiz.setAttribute("data-theme", tema);
    const claro = tema === "light";
    btn.setAttribute("aria-pressed", String(claro));
    btn.setAttribute("aria-label", claro ? "Ativar modo escuro" : "Ativar modo claro");
    if (meta) meta.setAttribute("content", claro ? "#f3f6ff" : "#000000");
  };

  const logoTopo = document.querySelector("header img.brand");
  const trocarLogo = (tema) => {
    if (!logoTopo || !logoTopo.isConnected) return;
    const alvo = tema === "light" ? (IMAGENS.logoClaro || IMAGENS.logo) : IMAGENS.logo;
    if (logoTopo.getAttribute("src") === alvo) return;
    const t = new Image();
    t.onload = () => { logoTopo.src = alvo; };
    t.src = alvo;
  };

  aplicar(raiz.getAttribute("data-theme") === "light" ? "light" : "dark");
  trocarLogo(raiz.getAttribute("data-theme") === "light" ? "light" : "dark");

  btn.addEventListener("click", () => {
    const novo = raiz.getAttribute("data-theme") === "light" ? "dark" : "light";
    raiz.classList.add("tema-anim");
    aplicar(novo);
    trocarLogo(novo);
    try { localStorage.setItem("pk-tema", novo); } catch (e) {}
    document.dispatchEvent(new Event("pk-tema"));
    setTimeout(() => raiz.classList.remove("tema-anim"), 450);
  });
})();

(() => {
  const bn = document.getElementById("bn"), mp = document.getElementById("mp"), bnm = document.getElementById("bnm");
  if (!bn || !mp || !bnm) return;
  const abrir = (v) => {
    mp.classList.toggle("on", v);
    mp.setAttribute("aria-hidden", String(!v));
    bnm.setAttribute("aria-expanded", String(v));
    document.documentElement.classList.toggle("mp-aberto", v);
  };
  bnm.addEventListener("click", () => abrir(!mp.classList.contains("on")));

  const mbtn = document.getElementById("mb");
  if (mbtn) mbtn.addEventListener("click", () => {
    if (!matchMedia("(max-width:768px)").matches) return;
    const v = !mp.classList.contains("on");
    abrir(v);
    mbtn.setAttribute("aria-expanded", String(v));
  });
  mp.addEventListener("click", (e) => { if (e.target.closest("[data-fechar], a")) abrir(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") abrir(false); });

  const itens = [...bn.querySelectorAll("a")];
  const marcar = (id) => {
    let achou = false;
    itens.forEach((a) => { const on = a.getAttribute("href") === "#" + id; a.classList.toggle("on", on); achou = achou || on; });
    bnm.classList.toggle("on", !achou);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) marcar(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main > section[id]").forEach((s) => io.observe(s));
  }
})();

(() => {
  const f = document.querySelector("body>footer");
  if (!f || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(([e]) => document.documentElement.classList.toggle("no-wa", e.isIntersecting)).observe(f);
})();

(() => {
  const bn = document.getElementById("bn");
  const f  = document.querySelector("body>footer");
  if (!bn || !f) return;

  const raiz = document.documentElement;
  const mq = matchMedia("(max-width:768px)");
  const DESCER = 3, SUBIR = 8;
  let ultimo = window.scrollY, oculto = false, agendado = false;

  const definir = (v) => {
    if (v === oculto) return;
    oculto = v;
    raiz.classList.toggle("bn-oculta", v);
  };

  const noRodape = () => f.getBoundingClientRect().top <= window.innerHeight - (bn.offsetHeight || 64);

  const avaliar = () => {
    agendado = false;

    if (!mq.matches || raiz.classList.contains("mp-aberto")) { definir(false); ultimo = window.scrollY; return; }

    const max = Math.max(0, raiz.scrollHeight - window.innerHeight);
    const y = Math.min(Math.max(window.scrollY, 0), max);
    const dy = y - ultimo;

    if (!noRodape()) { definir(false); ultimo = y; return; }
    if (dy >= DESCER)       { definir(true);  ultimo = y; }
    else if (dy <= -SUBIR)  { definir(false); ultimo = y; }
  };

  const pedir = () => { if (!agendado) { agendado = true; requestAnimationFrame(avaliar); } };

  window.addEventListener("scroll", pedir, { passive: true });
  window.addEventListener("resize", pedir);
  window.addEventListener("orientationchange", pedir);

  new MutationObserver(pedir).observe(raiz, { attributes: true, attributeFilter: ["class"] });

  raiz.classList.add("bn-auto");
  const iniciar = () => {
    ultimo = window.scrollY;
    if (mq.matches && noRodape() && !raiz.classList.contains("mp-aberto")) definir(true);
  };
  if (document.readyState === "complete") iniciar(); else window.addEventListener("load", iniciar);
})();