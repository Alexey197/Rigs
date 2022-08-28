import {createElement} from "../utils";

const createCardsTemplate = () => {
  return (
    `<div class="rigs__cards"></div>`
  )
}

export default class Cards {
  constructor() {
    this._element = null
  }

  getTemplate() {
    return createCardsTemplate()
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