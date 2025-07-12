export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.nextElementSibling.classList.toggle(this.activeClass);
    item.classList.toggle(this.activeClass);
  }

  //Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
      //Neste caso, foi preciso criar uma função anônima, pois foi necessário utilizar o "item" na função "toggleAccordion"
    });
  }

  //Iniciar função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]); //Faz com que o primeiro item do accordion seja ativado no momento em que a página é carregada
      this.addAccordionEvent();
    }
    return this;
  }
}
