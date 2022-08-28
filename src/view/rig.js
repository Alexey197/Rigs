import {createElement} from "../utils";


export const generateCardTuning = (card) => {
  const {id, model, core, memory, power, fan, temp, set} = card

  return (
      `<tr>
           <th class="cell__id" scope="row">${id}</th>
           <td class="cell__model" contenteditable="true">${model}</td>
           <td class="cell__core" contenteditable="true">${core}</td>
           <td class="cell__memory" contenteditable="true">${memory}</td>
           <td class="cell__power" contenteditable="true">${power}</td>
           <td class="cell__fan" contenteditable="true">${fan}</td>
           <td class="cell__temp" contenteditable="true">${temp}</td>
           <td class="cell__set" contenteditable="true">${set}</td>
       </tr>`
  )
}

export const createRigTemplate = (rig, index) => {
  const cardItems = rig.map(generateCardTuning)
      .join(``)
  return (
    `<article class="rig">
                <h2 class="rig__title">alex${index}</h2>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th class="cell-head__id" scope="col">#</th>
                        <th class="cell-head__model" scope="col">Card Model</th>
                        <th class="cell-head__core" scope="col">Core Clock offset, MHz</th>
                        <th class="cell-head__memory" scope="col">Memory Clock offset, MHz</th>
                        <th class="cell-head__power" scope="col">Power limit, W</th>
                        <th class="cell-head__fan" scope="col">Fan, %</th>
                        <th class="cell-head__temp" scope="col">Target Temp, С°</th>
                        <th class="cell-head__set" scope="col">Set</th>
                    </tr>
                    </thead>
                    <tbody>
                        ${cardItems}
                      
                    </tbody>
                </table>
                <button class="rig__submit" type="submit">save</button>
            </article>`
  )
}

export default class Rig {
  constructor(rig, count) {
    this._element = null
    this._count = count
    this._rig = rig
  }

  getTemplate() {
    return createRigTemplate(this._rig, this._count)
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