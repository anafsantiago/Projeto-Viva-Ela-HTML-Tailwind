export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  removeClass(element) {
    element.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
  }

  //Ativa a tabnav de acordo com o index
  activeTab(index) {
    this.removeClass(this.tabMenu);
    this.tabMenu[index].classList.add(this.activeClass);
    this.removeClass(this.tabContent);
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  //Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      //Ativar o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
