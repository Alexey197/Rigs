import {RIGS} from "../data";
import {createSiteMenuTemplate} from "./view/site-menu"
import {createRigsTemplate} from "./view/rigs"
import {createBoardTemplate} from "./view/board"
import {createRigTemplate} from "./view/rig"

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template)
}

const siteMainElement = document.querySelector(`.main`)
render(siteMainElement, createSiteMenuTemplate(), `beforeend`)
render(siteMainElement, createBoardTemplate(), `beforeend`)

const boardElement = siteMainElement.querySelector(`.board`)
render(boardElement, createRigsTemplate(), `beforeend`)
const rigsListElement = boardElement.querySelector(`.rigs__cards`)

RIGS.forEach((rig, index) => {
  render(rigsListElement, createRigTemplate(rig, index + 1), `beforeend`)
})