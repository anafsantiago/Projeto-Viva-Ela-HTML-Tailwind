export default class ActiveMenu {
  constructor(links, events) {
    this.links = document.querySelectorAll(links);
    this.url = window.location.pathname.split("/");
    this.activeClass = "active";

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.preventDefaultLink = this.preventDefaultLink.bind(this);
  }

  //Não recarregar a página, caso o link já esteja ativo
  preventDefaultLink(event) {
    if (event.target.classList.contains(this.activeClass)) {
      event.preventDefault();
    }
  }

  //Adicionar a classe "active" em um link ativo
  activeLink() {
    this.links.forEach((link) => {
      link.classList.remove(this.activeClass);
      const id = link.getAttribute("id");
      if (id === this.url[this.url.length - 1]) {
        link.classList.add(this.activeClass);
      }
    });
  }

  addLinkEvents() {
    this.links.forEach((link) => {
      this.events.forEach((userEvent) => {
        link.addEventListener(userEvent, this.preventDefaultLink);
      });
    });
  }

  init() {
    if (this.links) {
      this.activeLink();
      this.addLinkEvents();
    }
    return this;
  }
}
