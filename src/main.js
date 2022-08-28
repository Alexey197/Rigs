import {RIGS} from "../data";
import SiteMenu from "./view/site-menu"
import Cards from "./view/cards"
import Board from "./view/board"
import Rigs from "./view/rigs"
import {render, RenderPosition} from "./utils";

const siteMainElement = document.querySelector(`.main`)
const siteMenuComponent = new SiteMenu()
render(siteMainElement, siteMenuComponent.getElement(), RenderPosition.AFTERBEGIN)

const bordComponent = new Board()
render(siteMainElement, bordComponent.getElement(), RenderPosition.BEFOREEND)

const boardElement = siteMainElement.querySelector(`.board`)
const cardsComponent = new Cards()

render(boardElement, cardsComponent.getElement(), RenderPosition.BEFOREEND)

const rigsListElement = boardElement.querySelector(`.rigs__cards`)
const rigs = new Rigs(RIGS)
render(rigsListElement, rigs.getElement(), RenderPosition.BEFOREEND)