import ScrollAnima from "./modules/scroll-anima.js";
import MenuDropdown from "./modules/menu-dropdown.js";
import MenuMobile from "./modules/menu-mobile.js";

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuDropdown = new MenuDropdown("[data-dropdown]");
menuDropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
