function initTabnav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabnav();
function initAccordion() {
  const acoordionList = document.querySelectorAll(".js-accordion dt");
  const ativoClass = "ativo";
  if (acoordionList.length) {
    acoordionList[0].classList.add(ativoClass);
    acoordionList[0].nextElementSibling.classList.add(ativoClass);
    function ativarAccordion(event) {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }
    acoordionList.forEach((item) => {
      item.addEventListener("click", ativarAccordion);
    });
  }
}

initAccordion();
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollSuave(event) {
    event.preventDefault();
    const hrefItem = event.currentTarget.getAttribute("href");
    const section = document.querySelector(hrefItem);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }
  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowTamanho = window.innerHeight * 0.5;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowTamanho;
        if (isSectionVisible < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
