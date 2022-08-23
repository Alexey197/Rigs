import {createSiteMenuTemplate} from "./view/site-menu"
import {createRigsTemplate} from "./view/rigs"
import {createBoardTemplate} from "./view/board"
import {createRigTemplate} from "./view/rig"

const RIG_COUNT = 3

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template)
}

const siteMainElement = document.querySelector(`.main`)
render(siteMainElement, createSiteMenuTemplate(), `beforeend`)
render(siteMainElement, createBoardTemplate(), `beforeend`)

const boardElement = siteMainElement.querySelector(`.board`)
render(boardElement, createRigsTemplate(), `beforeend`)
const rigsListElement = boardElement.querySelector(`.rigs__cards`)

for (let i = 0;i < RIG_COUNT;i++) {
  render(rigsListElement, createRigTemplate(), `beforeend`)
}