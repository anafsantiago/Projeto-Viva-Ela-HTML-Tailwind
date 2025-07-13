import ScrollAnima from "./modules/scroll-anima.js";
import MenuDropdown from "./modules/menu-dropdown.js";

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuDropdown = new MenuDropdown("[data-dropdown]");
menuDropdown.init();
