//Esta solução serve para quando o usuário está usando o mobile
import outsideClick from "./click-outside.js";

export default class MenuDropdown {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";

    //Define touchstart e click como argumento padrão de events, caso o usuário não defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //Ativa o dropdownmenu e adiciona a função que observa o clique fora dele.
  activeDropdownMenu(event) {
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    //Quando abre o menu dropdown é o momento de monitorar o clique externo
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    }); //Esta função monitora o clique externo
  }

  //Adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
