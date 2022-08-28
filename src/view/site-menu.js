import {createElement} from "../utils";

const createSiteMenuTemplate = () => {
  return (
    `<section class="main__menu">Menu</section>`
  )
}

export default class SiteMenu {
  constructor() {
    this._element = null
  }

  getTemplate() {
    return createSiteMenuTemplate()
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate())
    }

    return this._element
  }

  removeElement() {
    this._element = null
  }
}