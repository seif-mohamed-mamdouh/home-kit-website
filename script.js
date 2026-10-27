/**
 * HOME KIT — website settings
 * Add your ACTUAL business contact information before publishing or applying to noon.
 * Leave fields blank if you do not want that channel to appear.
 * Egypt WhatsApp example format: "2010XXXXXXXX" (no + sign or spaces).
 */
const HOME_KIT_CONFIG = {
  email: "pentanela.egypt@gmail.com", // e.g. "hello@homekit.com"
  phone: "+201001497616", // e.g. "+20 10 1234 5678"
  whatsapp: "+201001497616", // e.g. "201012345678"
  locationEn: "Cairo, Egypt", // e.g. "Cairo, Egypt"
  locationAr: "القاهرة، مصر", // e.g. "القاهرة، مصر"
};

const translations = {
  en: {
    skip: "Skip to content",
    navHome: "Home",
    navCategories: "Categories",
    navAbout: "About us",
    navContact: "Contact",
    letsTalk: "Get in touch",
    heroEyebrow: "YOUR EVERYDAY HOME ESSENTIALS",
    heroTitle: "Make room for <span>better living.</span>",
    heroDescription:
      "From helpful tools to everyday household equipment, discover the essentials that make home life simpler.",
    shopCategories: "Explore categories",
    discoverBrand: "Discover Home Kit",
    heroFootnote: "Practical products for every corner of your home",
    tagHome: "MADE FOR HOME",
    heroBottom: "YOUR HOME KIT, ALWAYS READY",
    categoriesEyebrow: "WHAT YOU'LL FIND",
    categoriesTitle: "Essentials for <em>every space.</em>",
    categoriesIntro:
      "Discover practical collections designed around real needs — at home, in the kitchen, and everywhere in between.",
    catTools: "Tools & Equipment",
    catToolsDesc: "Useful tools for your home projects and daily tasks.",
    catKitchen: "Kitchen Essentials",
    catKitchenDesc: "Smart everyday helpers for cooking and dining.",
    catStorage: "Storage & Organization",
    catStorageDesc: "Neat solutions for spaces that work better.",
    catCleaning: "Cleaning Equipment",
    catCleaningDesc: "Everyday items that help keep things fresh.",
    catLighting: "Lighting & Decor",
    catLightingDesc: "Simple touches to make spaces feel complete.",
    catAccessories: "Home Accessories",
    catAccessoriesDesc: "Helpful additions for your everyday routine.",
    categoryNote: "Looking for something specific for your home?",
    categoryNoteLink: "Ask about our range ↗",
    aboutArt: "YOUR HOME KIT, ALWAYS READY.",
    aboutEyebrow: "GET TO KNOW US",
    aboutTitle: "A simpler way to <em>equip your home.</em>",
    aboutLead:
      "Home Kit (هوم كيت) is a home equipment and essentials brand focused on the practical items people use every day. We bring together categories that help make daily life more organized, convenient, and comfortable.",
    aboutPoint1: "Useful by design",
    aboutPoint1Desc: "A focus on everyday function and practical home needs.",
    aboutPoint2: "For different spaces",
    aboutPoint2Desc: "From the kitchen to storage, cleaning, and maintenance.",
    aboutPoint3: "Easy to explore",
    aboutPoint3Desc: "Clear collections that help you find what you need.",
    statement: "YOUR HOME KIT, ALWAYS READY.",
    contactEyebrow: "LET'S CONNECT",
    contactTitle: "Have a question? <em>Let's talk.</em>",
    contactDesc:
      "Want to know more about Home Kit or ask about a product category? Reach out through our available business contact channels.",
    contactCardHeading: "BUSINESS INQUIRIES",
    contactPending:
      "Business contact information will be added here before launch.",
    contactFooter: "We're happy to hear from you.",
    footerTagline: "Your Home Kit, Always Ready.",
    rights: "All rights reserved.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    locationLabel: "Location",
  },
  ar: {
    skip: "تخطَّ إلى المحتوى",
    navHome: "الرئيسية",
    navCategories: "الأقسام",
    navAbout: "من نحن",
    navContact: "تواصل معنا",
    letsTalk: "تواصل معنا",
    heroEyebrow: "مستلزمات منزلك اليومية",
    heroTitle: "كل ما يلزم منزلك <span>لحياة أسهل.</span>",
    heroDescription:
      "من الأدوات العملية إلى المعدات المنزلية اليومية، اكتشف أساسيات تجعل مهام البيت أبسط وأكثر راحة.",
    shopCategories: "تصفح الأقسام",
    discoverBrand: "تعرف على هوم كيت",
    heroFootnote: "منتجات عملية لكل ركن في منزلك",
    tagHome: "صُمم للمنزل",
    heroBottom: "هوم كيت، كل احتياجات منزلك دائمًا جاهزة",
    categoriesEyebrow: "اكتشف مجموعاتنا",
    categoriesTitle: "أساسيات <em>لكل مساحة.</em>",
    categoriesIntro:
      "تصفح مجموعات عملية تناسب احتياجات الحياة اليومية، في المطبخ وجميع أركان المنزل.",
    catTools: "الأدوات والمعدات",
    catToolsDesc: "أدوات مفيدة للأعمال المنزلية والمهام اليومية.",
    catKitchen: "أساسيات المطبخ",
    catKitchenDesc: "مستلزمات عملية للطهي وتقديم الطعام.",
    catStorage: "التخزين والتنظيم",
    catStorageDesc: "حلول بسيطة لترتيب المساحات بكفاءة.",
    catCleaning: "معدات التنظيف",
    catCleaningDesc: "مستلزمات تساعدك في العناية بنظافة المنزل.",
    catLighting: "الإضاءة والديكور",
    catLightingDesc: "تفاصيل بسيطة تكمل شكل مساحتك.",
    catAccessories: "إكسسوارات المنزل",
    catAccessoriesDesc: "إضافات مفيدة لاحتياجاتك اليومية.",
    categoryNote: "تبحث عن مستلزم معين لمنزلك؟",
    categoryNoteLink: "اسأل عن منتجاتنا ↗",
    aboutArt: "هوم كيت، كل احتياجات منزلك دائمًا جاهزة",
    aboutEyebrow: "تعرف علينا",
    aboutTitle: "طريقة أبسط <em>لتجهيز منزلك.</em>",
    aboutLead:
      "هوم كيت (Home Kit) علامة تجارية للمعدات والمستلزمات المنزلية، تهتم بالأدوات العملية التي نستخدمها كل يوم. نجمع أقسامًا متنوعة تساعد على جعل الحياة اليومية أكثر تنظيمًا وسهولة وراحة.",
    aboutPoint1: "منفعة يومية",
    aboutPoint1Desc: "التركيز على الاستخدام العملي واحتياجات المنزل.",
    aboutPoint2: "لكل مساحة",
    aboutPoint2Desc: "من المطبخ إلى التخزين والتنظيف والصيانة.",
    aboutPoint3: "تصفح سهل",
    aboutPoint3Desc: "أقسام واضحة تساعدك في الوصول لما تحتاجه.",
    statement: "هوم كيت، كل احتياجات منزلك دائمًا جاهزة",
    contactEyebrow: "تواصل معنا",
    contactTitle: "عندك استفسار؟ <em>نحن هنا.</em>",
    contactDesc:
      "تريد معرفة المزيد عن هوم كيت أو الاستفسار عن أحد الأقسام؟ تواصل معنا عبر قنوات الاتصال المتاحة.",
    contactCardHeading: "استفسارات الأعمال",
    contactPending: "ستُضاف بيانات التواصل الخاصة بالنشاط قبل إطلاق الموقع.",
    contactFooter: "يسعدنا تواصلك معنا.",
    footerTagline: "هوم كيت، كل احتياجات منزلك دائمًا جاهزة.",
    rights: "جميع الحقوق محفوظة.",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    whatsappLabel: "واتساب",
    locationLabel: "الموقع",
  },
};

const languageButton = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");
const mobileMenuButton = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
const contactList = document.getElementById("contactList");
const contactPlaceholder = document.getElementById("contactPlaceholder");

function getSavedLanguage() {
  try {
    return localStorage.getItem("homeKitLanguage") === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}
let currentLanguage = getSavedLanguage();

function addContactEntry(label, value, href) {
  const row = document.createElement("div");
  row.className = "contact-entry";
  const details = document.createElement("div");
  const small = document.createElement("span");
  small.className = "contact-entry-label";
  small.textContent = label;
  const display = document.createElement(href ? "a" : "span");
  display.className = "contact-entry-value";
  display.textContent = value;
  if (href) {
    display.href = href;
    if (href.startsWith("https:")) {
      display.target = "_blank";
      display.rel = "noopener noreferrer";
    }
  }
  details.append(small, display);
  const arrow = document.createElement("span");
  arrow.className = "contact-entry-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = href ? "↗" : "⌖";
  row.append(details, arrow);
  contactList.appendChild(row);
}
function renderContacts(lang) {
  contactList.replaceChildren();
  const dict = translations[lang];
  const email = HOME_KIT_CONFIG.email.trim();
  const phone = HOME_KIT_CONFIG.phone.trim();
  const whatsapp = HOME_KIT_CONFIG.whatsapp.replace(/\D/g, "");
  const location = (
    lang === "ar"
      ? HOME_KIT_CONFIG.locationAr || HOME_KIT_CONFIG.locationEn
      : HOME_KIT_CONFIG.locationEn || HOME_KIT_CONFIG.locationAr
  ).trim();
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    addContactEntry(dict.emailLabel, email, `mailto:${email}`);
  if (phone)
    addContactEntry(
      dict.phoneLabel,
      phone,
      `tel:${phone.replace(/[^+\d]/g, "")}`,
    );
  if (whatsapp.length >= 10)
    addContactEntry(
      dict.whatsappLabel,
      lang === "ar" ? "تحدث معنا على واتساب" : "Chat with us on WhatsApp",
      `https://wa.me/${whatsapp}`,
    );
  if (location) addContactEntry(dict.locationLabel, location, "");
  contactPlaceholder.hidden = contactList.children.length > 0;
}
function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = dict[el.dataset.i18n] ?? el.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    // Only trusted, locally defined translation strings are inserted as HTML.
    if (dict[el.dataset.i18nHtml]) el.innerHTML = dict[el.dataset.i18nHtml];
  });
  languageLabel.textContent = lang === "en" ? "العربية" : "English";
  languageButton.setAttribute(
    "aria-label",
    lang === "en" ? "Switch website to Arabic" : "Switch website to English",
  );
  document.title =
    lang === "ar"
      ? "هوم كيت | كل احتياجات منزلك"
      : "Home Kit | Your Home Kit, Always Ready";
  document.querySelector('meta[name="description"]').content =
    lang === "ar"
      ? "هوم كيت: معدات ومستلزمات وأدوات عملية للمطبخ والتنظيف وتنظيم المنزل والاستخدام اليومي."
      : "Home Kit brings together practical home equipment, kitchen essentials, cleaning equipment, organizers, and everyday home accessories.";
  renderContacts(lang);
  try {
    localStorage.setItem("homeKitLanguage", lang);
  } catch {
    /* storage may not be available */
  }
}

languageButton.addEventListener("click", () =>
  applyLanguage(currentLanguage === "en" ? "ar" : "en"),
);
mobileMenuButton.addEventListener("click", () => {
  const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenuButton.setAttribute(
    "aria-label",
    isOpen ? "Open menu" : "Close menu",
  );
  nav.classList.toggle("is-open", !isOpen);
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute("aria-label", "Open menu");
  }),
);
window.addEventListener("resize", () => {
  if (window.innerWidth > 830) {
    nav.classList.remove("is-open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
