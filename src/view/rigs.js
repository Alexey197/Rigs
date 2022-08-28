import {createElement} from "../utils";

const createRigsTemplate = () => {
  return (
    `<div class="rigs__cards"></div>`
  )
}

export default class Rigs {
  constructor() {
    this._element = null
  }

  getTemplate() {
    return createRigsTemplate()
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