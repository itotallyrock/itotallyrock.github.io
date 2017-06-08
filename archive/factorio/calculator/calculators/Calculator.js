export default class Calculator {
  constructor (options) {
    this.title = options.title
    this.description = options.title
    this.inputs = {}
    this.calculate = options.calculate || function () { return true }
  }
}

export class Input {
  constructor (options) {
    this.name = options.name

    this.validators = options.validators || []

    this.element = document.createElement('input')
    this.element.type = options.type.toLowerCase() || 'text'
    this.element.name = options.name
    this.element.required = options.required || false

    for (let elementOption in options.elementOptions) {
      this.element.elementOption = options.elementOptions[elementOption]
    }
    this.element.classList.add(...options.classes)
  }

  // Filler function to return array of validator calls
  // Safety measure to allow async validators
  async _getValidatorCalls () {
    let validatorCalls = []
    for (let validator of this.validators) {
      validatorCalls.push(validator.bind(this).call(this, this.getValue()))
    }
    return validatorCalls
  }

  async validate () {
    try {
      let validationResponses = await Promise.all(this._getValidatorCalls())
      for (let isValid of validationResponses) {
        if (isValid === false) return false
      }
    } catch (validationException) {
      return false
    }
  }

  coerceValue (value) {
    if (this.type === 'number') return Number(value)
    else if (this.type === 'date' || this.type === 'time' || this.type === 'datetime') return new Date(value)
    else return String(value)
  }

  getValue () {
    return this.element.value
  }
}
