import {RIGS} from "../data";
import SiteMenu from "./view/site-menu"
import Rigs from "./view/rigs"
import Board from "./view/board"
import Rig from "./view/rig"
import {render, RenderPosition} from "./utils";

const siteMainElement = document.querySelector(`.main`)
const siteMenuComponent = new SiteMenu()
render(siteMainElement, siteMenuComponent.getElement(), RenderPosition.AFTERBEGIN)

const bordComponent = new Board()
render(siteMainElement, bordComponent.getElement(), RenderPosition.BEFOREEND)

const boardElement = siteMainElement.querySelector(`.board`)
const rigsComponent = new Rigs()

render(boardElement, rigsComponent.getElement(), RenderPosition.BEFOREEND)
const rigsListElement = boardElement.querySelector(`.rigs__cards`)

RIGS.forEach((rig, index) => {
  const rigComponent = new Rig(rig, index + 1)
  render(rigsListElement, rigComponent.getElement(), RenderPosition.BEFOREEND)
})
